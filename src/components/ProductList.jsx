import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../features/product/productSlice";

function ProductList({ updateProduct }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h4 className="text-center">Product List</h4>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-3">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Rs.{product.price}</p>
                <p className="card-text">{product.category}</p>
              </div>
              <div className="mx-3 mb-3">
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteProduct(product.id))}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning mx-3"
                  onClick={() => updateProduct(product)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
