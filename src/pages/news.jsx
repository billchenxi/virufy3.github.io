import React, { useState } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import GatsbyImage from "gatsby-image";
import { news } from "../data/news";
import countryshape from "../images/news/countryshape.png";

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/news" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const NewsList = (props) => {
  const {
    section,
    image,
    person: { id, mediaLink },
  } = props;

  const intl = useIntl();

  return (
    <section className="wrapper md:flex">
      <div className="lg:w-2/5">
        <GatsbyImage className="mx-auto w-1\/2" fluid={image} />
      </div>
      <div className="lg:w-2/3 mx-10">
        <p className="mb-8">
          {intl.formatMessage({ id: `news.${section}.${id}.date` })}
        </p>
        <h3 className="mb-8 font-bold text-2xl">
          {intl.formatMessage({ id: `news.${section}.${id}.title` })}
        </h3>
        <p>{intl.formatMessage({ id: `news.${section}.${id}.name` })}</p>
        <p className="mb-8">
          {intl.formatMessage({ id: `news.${section}.${id}.city` })}
          {intl.formatMessage({ id: `news.${section}.${id}.country` })}
        </p>

        <a
          target="_blank"
          rel="noreferrer"
          href={mediaLink}
          className="text-black"
        >
          <u>
            {intl.formatMessage({ id: `news.${section}.${id}.readMoreLink` })}
          </u>
        </a>
      </div>
    </section>
  );
};

const CountrySelect = (props) => {
  const countryText = [
    "Argentina ",
    "Brazil",
    "Columbia",
    "Japan",
    "Mexico",
    "Peru",
  ];

  const [divHidden, setDivHidden] = useState(true);
  const onCountrySelect = (country) => {
    setDivHidden(true);
    props.setCountry(country);
  };

  return (
    <>
      <button onClick={() => setDivHidden(!divHidden)}>
        Filter News by Country
      </button>
      <div className={`flex flex-col ${divHidden ? "hidden" : ""}`}>
        {countryText.map((country) => (
          <button onClick={() => onCountrySelect(country)} key={country}>
            {country}
          </button>
        ))}
      </div>
      <p>
        {props.country && (
          <button className="font-bold" onClick={() => props.setCountry("")}>
            {props.country}
            <img className="inline-block" src={countryshape}></img>
          </button>
        )}
      </p>
    </>
  );
};

export default function News({ data }) {
  const images = data.allFile.edges;
  const intl = useIntl();

  const [country, setCountry] = useState("");

  return (
    <Layout>
      <SEO title="News | Virufy" />
      <div className="wrapper lg:flex items-center justify-between md:py-4">
        <h1 classNmae="font-bold text-4xl">
          {intl.formatMessage({ id: "news.headers.header" })}
        </h1>
        <span>
          <CountrySelect setCountry={setCountry} country={country} />
        </span>
      </div>

      <section>
        {news
          .filter((item) => {
            if (country === "") return true;
            return item.country === country;
          })
          .map((item) => {
            const NewsPic = images.find(({ node: { name } }) => {
              return name === item.imageName;
            }).node.childImageSharp.fluid;

            return (
              <NewsList
                key={`${news}${item.id}`}
                section="news"
                image={NewsPic}
                person={item}
              />
            );
          })}
      </section>
    </Layout>
  );
}