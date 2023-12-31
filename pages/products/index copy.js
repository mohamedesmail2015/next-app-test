import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button, Card } from "react-bootstrap";

import styleProducts from "@/styles/Products.module.css";

export default function index({ products }) {
  return (
    <>
      <Head>
        <title>products Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1>product page</h1>
        <div className="row">
          <div className="content_card col-3">
            {products.map((product) => (
              <div className="card" key={product.id}>
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title className="title_card">
                    {product.title}
                  </Card.Title>
                  <Card.Text>{product.price} $</Card.Text>

                  <Link className="btn" href={`/products/${product.id}`}>
                    التفاصيل
                  </Link>
                </Card.Body>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);

    return {
      props: { products: res.data },
    };
  } catch (error) {
    console.log(error);
  }
}
