import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function ProductPage() {
  const [product, setProduct] = useState([]);
  console.log(useParams);
  const { productID } = useParams();
  console.log(productID);
  useEffect(() => {
    fetch("/iphoneData.json")
      .then((response) => response.json())
      .then((mydata) => {
        let productsList = mydata.products;
        console.log(productsList);
        const singleProduct = productsList.filter(
          (product) => product.product_url === productID
        );
        setProduct(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [productID]);
  console.log(product);

  if (product.length) {
    return (
      <div>
        <div className="container">
          {product?.map((product) => {
            return (
              <div key={product.product_id}>
                <div className={"row justify-content-center text-center"}>
                  <div className="col-12 mt-5 pt-5">
                    <div className="title-wrapper font-weight-bold">
                      {product.product_name}
                    </div>
                    <div className="brief-description">
                      {product.product_brief_description}
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center text-center product-holder h-100 m-5">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div>{`Starting at ${product.starting_price}`}</div>
                    <div>{product.price_range}</div>
                    <div>{product.product_description}</div>
                  </div>
                  <div className={`col-sm-12 col-md-6`}>
                    <div className="product-img">
                      <img src={product.product_img} alt="product img" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <Four04 />;
  }
}
export default ProductPage;
