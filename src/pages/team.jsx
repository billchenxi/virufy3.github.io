import React from "react";
import { graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import GatsbyBgImage from "gatsby-background-image";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { leadership, advisors } from "../data/team-members";
import ValuesSection from "../components/team/ValuesSection";

export default ({ data }) => {
  const images = {};

  // add the images to an object to use in gatsby image
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  return <ValuesSection images={images} />;
};

// // component for displaying team-member info
// const TeamMember = (props) => {
//   const intl = useIntl();

//   const {
//     role,
//     image,
//     person: { id, defaultName, mediaLink },
//   } = props;

//   return (
//     <div className="flex flex-col items-center mx-auto mb-10 md:w-1/2 lg:w-1/4">
//       {/* <a target="_blank" rel="noreferrer" href={intl.formatMessage({id: `team.${id}.mediaLink`})}> */}
//       <a target="_blank" rel="noreferrer" href={mediaLink}>
//         <GatsbyImage
//           className="w-64 h-64 mx-auto my-2  rounded-md overflow-hidden team-icons"
//           fluid={image}
//         />
//       </a>
//       <h5 className="mt-4 text-xl font-semibold text-gray-200">
//         {intl.formatMessage({
//           id: `team.${role}.${id}.name`,
//           defaultMessage: defaultName,
//         })}
//       </h5>
//       <h6 className="text-lg text-center">
//         {intl.formatMessage({
//           id: `team.${role}.${id}.title`,
//           defaultMessage: " ",
//         })}
//       </h6>
//       <div className="my-2"></div>
//       {intl
//         .formatMessage({
//           id: `team.${role}.${id}.description`,
//           defaultMessage: " ",
//         })
//         .split("\n")
//         .map((str, i) => (
//           <p key={i} className="w-5/6 text-center">
//             {str}
//           </p>
//         ))}
//     </div>
//   );
// };

// export default ({ data }) => {
//   const images = data.allFile.edges;
//   const intl = useIntl();
//   console.log(data);

//   return (
//     <Layout>
//       <SEO title="Team | Virufy" />
//       <section>
//         <h2 className="text-3xl font-bold mb-4 text-center">
//           {intl.formatMessage({ id: "team.section2.header" })}
//         </h2>
//         <div>
//           <p
//             className="mb-5 text-center"
//             dangerouslySetInnerHTML={{
//               __html: intl.formatMessage({ id: "team.section2.pg1" }),
//             }}
//           />
//         </div>
//       </section>
//       <div className="wrapper">
//         <div className="mb-6 md:mb-20">
//           <h2 className="mb-4 text-4xl font-bold text-center">
//             {intl.formatMessage({ id: "team.section3.leadership" })}
//           </h2>
//         </div>
//         <section className="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
//           {leadership.map((item) => {
//             const imageEdge = images.find(({ node: { relativePath } }) => {
//               return relativePath.includes(item.imageName);
//             });

//             return (
//               <TeamMember
//                 key={`${leadership}${item.id}`}
//                 role="leadership"
//                 image={imageEdge && imageEdge.node.childImageSharp.fluid}
//                 person={item}
//               />
//             );
//           })}
//         </section>
//       </div>
//       <div className="wrapper md:mt-12">
//         <div className="mb-6 md:mb-16">
//           <h2 className="mb-4 text-4xl font-bold text-center">
//             {intl.formatMessage({ id: "team.section3.advisors" })}
//           </h2>
//         </div>
//         <section className="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
//           {advisors.map((item) => {
//             const imageEdge = images.find(({ node: { relativePath } }) => {
//               return relativePath.includes(item.imageName);
//             });

//             return (
//               <TeamMember
//                 key={`${advisors}${item.id}`}
//                 role="advisors"
//                 image={imageEdge && imageEdge.node.childImageSharp.fluid}
//                 person={item}
//               />
//             );
//           })}
//         </section>
//       </div>
//       <section
//         className="flex justify-between bg-green-100"
//         style={{ padding: "5rem 10vw" }}
//       >
//         <div className="w-1/2">
//           <h2 className="mb-2 font-bold text-3xl">
//             {intl.formatMessage({ id: "team.section4.header" })}
//           </h2>
//           <p className="mb-8">
//             {intl.formatMessage({ id: "team.section4.pg1" })}
//           </p>
//         </div>
//       </section>
//     </Layout>
//   );
// };

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/team" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 500, maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
