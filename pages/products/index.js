import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../RTK/slices/productsSlice";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import stylesProducts from "@/styles/Products.module.css";
import Link from "next/link";

function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <h1 className={stylesProducts.titlePag}>All Products</h1>

      <Row>
        {products.map((product) => (
          <Col className="col-lg-3" key={product.id}>
            <Card className={stylesProducts.cards}>
              <Card.Img
                className={stylesProducts.cardImg}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {/* <Card.Text>{product.description}</Card.Text> */}
                <Card.Text>{product.price} $</Card.Text>

                <Button
                  className={stylesProducts.cardButton}
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>

                <Button className={stylesProducts.cardButton} variant="primary">
                  {/* <Link href="/cart">Add To cart</Link> */}
                  <Link className="btn" href={`/products/${product.id}`}>
                    التفاصيل
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
