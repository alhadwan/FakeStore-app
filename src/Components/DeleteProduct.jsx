import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const DeleteProduct = ({ productId, onSuccess }) => {

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: "Delete",

          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.ok) {
        onSuccess();
      }
      const data = await response.json();
      console.log(`Product ${data.id} deleted successfully`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button className="btn btn-danger w-100" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteProduct;
