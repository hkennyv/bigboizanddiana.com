import { useState, useEffect } from "react";
import Head from "next/head";

import { Container } from "semantic-ui-react";

import DiscordStats from "../components/DiscordStats";

export default function Home({ API_URL }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Big Boiz and Diana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <main>
          <h1>Big Boiz and Diana</h1>

          <p>
            Join us in the <a>discord!</a>
          </p>

          <div>
            <DiscordStats data={data} />
          </div>
        </main>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;

  return {
    props: {
      API_URL,
    },
  };
}
