import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Produk A", price: 50000, description: "Deskripsi Produk A" },
  { id: 2, name: "Produk B", price: 75000, description: "Deskripsi Produk B" },
  { id: 3, name: "Produk C", price: 100000, description: "Deskripsi Produk C" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Produk tidak ditemukan!</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{product.name}</h2>
      <p style={{ fontSize: "18px", color: "#555" }}>{product.description}</p>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Rp {product.price.toLocaleString()}</p>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Kembali
      </button>
    </div>
  );
};

export default ProductDetail;
