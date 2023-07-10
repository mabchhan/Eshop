//import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
//import axios from "axios";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  //const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch("/api/products");
  //     const data = await res.json();
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h3>{error?.data?.message || error.error}</h3>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
