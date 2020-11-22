import React from "react";
import Head from "next/head";

function Meta({ favicon, title }) {
  return (
    <Head>
      <title>{title ? title : ""}</title>
      <link rel="icon" href={favicon ? favicon : "/favicon.ico"} />
    </Head>
  );
}

export default Meta;
