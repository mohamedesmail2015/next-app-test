import axios from "axios";
import Head from "next/head";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../RTK/slices/cartSlice";

import styleProductId from "@/styles/ProductId.module.css";

export default function singleProduct({ product }) {
  const dispatch = useDispatch();

  const { category, title, price, image, id } = product;
  return (
    <>
      <Head>
        <title>{title} Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className={styleProductId.cards_pro}>
          <Card className={styleProductId.card} key={id}>
            <Card.Img
              className={styleProductId.cardImg}
              variant="top"
              src={image}
            />
            <Card.Body>
              <Card.Title className={styleProductId.title_card}>
                {category}
              </Card.Title>
              <Card.Text>{price} $</Card.Text>

              <Button
                className={styleProductId.cardButton}
                variant="primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://fakestoreapi.com/products/${context.query.id}`
  );
  console.log(res.data);

  return {
    props: { product: res.data },
  };
}
