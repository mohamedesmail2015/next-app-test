import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function index({ posts }) {
  return (
    <>
      <head>
        <title>posts Page</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <>
        <div className="container">
          <h1>posts page</h1>
          <div className="row">
            <div className="content_card col-3">
              {posts.map((post) => (
                <div className="card" key={post.id}>
                  <Card.Img
                    className="cardImg"
                    variant="top"
                    src={post.image}
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                    <Button variant="primary">
                      <Link className="btn" href={`/posts/${post.id}`}>
                        التفاصيل
                      </Link>
                    </Button>
                  </Card.Body>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);

    return {
      props: { posts: res.data },
    };
  } catch (error) {
    console.log(error);
  }
}
