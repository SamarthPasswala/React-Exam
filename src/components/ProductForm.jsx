import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct1 } from "../features/product/productSlice";

function ProductForm() {
  let [product, setProduct] = useState({});
  let [updateId, setUpdateId] = useState("");

  const dispatch = useDispatch();

  let handleInput = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);

    if (updateId === "") {
      dispatch(addProduct(product));
    } else {
      dispatch(updateProduct1(product));
      setUpdateId("");
    }
    setProduct({});
  };

  let updateProduct = (product) => {
    setProduct(product);
    setUpdateId(product.id);
  };
  return (
    <>
      <div className="container">
        <h4 className="text-center mt-4 text-decoration-underline">
          Add Product
        </h4>
        <form className="w-75 mx-auto mt-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              <b> Name :</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleInput}
              value={product.title || ""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <b>Price :</b>
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              onChange={handleInput}
              value={product.price || ""}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <b> Image url:</b>
            </label>
            <input
              type="url"
              className="form-control"
              name="image"
              onChange={handleInput}
              value={product.image || ""}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <b> Product Category :</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="category"
              onChange={handleInput}
              value={product.category || ""}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ProductForm;
