import Favorites from "@/components/Favorites.component";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="This is the favorites page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Favorites />
    </>
  );
};

export default page;
