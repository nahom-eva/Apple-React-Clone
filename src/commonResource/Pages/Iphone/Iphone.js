import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphoneData.json")
      .then((response) => response.json())
      .then((mydata) => {
        setProducts(mydata.products);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, []);

  let flip = true;
  return (
    <div>
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12 mt-5 pt-5">
            <h1 className="font-weight-bold">Iphones </h1>
            <h2>The best for the brightest.</h2>
          </div>
        </div>
        <br />
        <br />
      </div>
      {products?.map((product) => {
        let o1 = 1;
        let o2 = 2;
        if (flip) {
          o1 = 2;
          o2 = 1;
          flip = !flip;
        } else {
          flip = !flip;
        }
        return (
          <div
            key={product.product_url}
            className="row text-center  h-100"
          >
            {/* Text display */}
            <div className={`col-sm-12 col-md-6 my-auto order-${o1}`}>
              <div className="product-title">{product.product_name}</div>
              <div className="product-brief">
                {product.product_brief_description}
              </div>
              <div>{`Starting at ${product.starting_price}`}</div>
              <div>{product.price_range}</div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <Link to={`/iphone/${product.product_url}`}>
                      Learn more
                    </Link> 
                  </li>
                </ul>
              </div>
            </div>
            {/*  Image display*/}
            <div className={`col-sm-12 col-md-6 order-${o2}`}>
              <div className="product-img">
                <img src={product.product_img} alt="product img" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Iphone;
