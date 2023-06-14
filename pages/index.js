import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
import Product from "../pages/products/index";
import Sin_up from "@/components/Sin_up";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <div className="container">
      Home Page
      {/* {products.map((product) => (
        <Product key={product.id} product={product} />
      ))} */}
      <Sin_up />
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();

  return {
    props: { products },
  };
}
