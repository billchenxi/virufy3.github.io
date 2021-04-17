import React from "react";
var Highcharts = require("highcharts/highstock");
require("highcharts/modules/map")(Highcharts);

import HighchartsMore from "highcharts/highcharts-more";

import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import MapAmerica from "./MapAmerica";

HighchartsMore(Highcharts);

export default function Dashboard({ data }) {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Dashboard | Virufy" />

      <div className="px-4 lg:px-0 lg:w-4/5 lg:mx-auto">
        <div className="grid mb-14 xl:px-0 justify-items-center grid-col-1 gap-16 overflow-hidden">
          <div className="mb-14 justify-self-start xl:mb-0 2l:mr-9">
            <h1
              className="text-3xl font-bold mb-16 mt-6"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "dashboard.header" }),
              }}
            />
            <p
              className="mb-12 xl:pr-14 max-w-screen-lg"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "dashboard.sub-header" }),
              }}
            />
            <a
              className="no-underline bg-green text-white px-4 py-2 mb-2 xs:text-xs"
              target="_blank"
              href={"/app"}
            >
              {intl.formatMessage({ id: "dashboard.button" })}
            </a>
          </div>
        </div>
      </div>
      <MapAmerica></MapAmerica>

      {/* COUNTER */}

      <div className="px-4 lg:px-0 lg:w-4/5 lg:mx-auto">
        <div className="grid mb-14 xl:px-0 justify-items-center grid-col-1 gap-16 overflow-hidden">
          <div className="mt-2 ml-14 md:ml-24 xl:ml-6">
            <iframe
              width="300"
              height="185"
              scrolling="no"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ZDjc9QHcMtCMoknKwX8WCzAJQ8Mk-yJ1CGwbCf-JqKKuemlIGL9EPPAe-7Ars2EI6z_ZAQsWEXgX/pubchart?oid=1483123778&amp;format=interactive"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
