import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import CareerHeader from "../../components/Career/CareerHeader";
import CareerDetails from "../../components/Career/CareerDetails";
const index = () => {
  return (
    <Layout>
      <Head>
        <title>Akij Motors | Career </title>
      </Head>

      <div>
        <CareerHeader />
        <CareerDetails />
      </div>
    </Layout>
  );
};

export default index;
