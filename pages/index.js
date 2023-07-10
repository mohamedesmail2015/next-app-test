import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/ctp1.png" />

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <>
        <Container>
          <h1>Home Page</h1>
          <h1>Home Page</h1>
          <h1>Home Page</h1>
          <h1>Home Page</h1>
          <h1>Home Page</h1>
          <h1>Home Page</h1>
          <h1>Home Page</h1>
          <h1>Home Page</h1>
        </Container>
      </>
    </>
  );
}
