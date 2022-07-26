import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Layout({title, description, main}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {main}
      <Footer />
    </div>
  );
}

export default Layout;
