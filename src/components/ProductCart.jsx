import React, { useState, useEffect } from "react";
import CartComp from "./CartComp";
import products from "../data/productData";

const ProductCart = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // Handle category checkbox change
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // Handle size checkbox change
  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Filter logic for products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesSize =
      selectedSizes.length === 0 ||
      selectedSizes.some((size) => product.Size.includes(size));

    return matchesCategory && matchesSize;
  });

  // Effect to reload page when no filters are applied, and store in localStorage to prevent endless reload
  useEffect(() => {
    if (selectedCategories.length === 0 && selectedSizes.length === 0) {
      const reloadStatus = localStorage.getItem("pageReloaded");
      if (!reloadStatus) {
        localStorage.setItem("pageReloaded", "true");
        window.location.reload();
      }
    } else {
      localStorage.removeItem("pageReloaded");
    }
  }, [selectedCategories, selectedSizes]);

  return (
    <div id="wrapper" style={{ marginTop: "70px" }}>
      <div className="cart-icon-top"></div>
      <div className="cart-icon-bottom"></div>
      <div id="checkout">CHECKOUT</div>

      <div id="sidebar">
        <h3>CART</h3>
        <div id="cart">
          <span className="empty">No items in cart.</span>
        </div>

        <h3>CATEGORIES</h3>
        <div className="checklist categories">
          <ul>
            {["Baju", "Celana", "Aksesoris", "Outer"].map((category) => (
              <li key={category}>
                <label>
                  <input
                    type="checkbox"
                    value={category}
                    onChange={() => handleCategoryChange(category)}
                    checked={selectedCategories.includes(category)}
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <h3>SIZES</h3>
        <div className="checklist sizes">
          <ul>
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <li key={size}>
                <label>
                  <input
                    type="checkbox"
                    value={size}
                    onChange={() => handleSizeChange(size)}
                    checked={selectedSizes.includes(size)}
                  />
                  {size}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="grid-selector">
        <div id="grid-menu">
          View:
          <ul>
            <li className="largeGrid">
              <a href="#"></a>
            </li>
            <li className="smallGrid">
              <a className="active" href="#"></a>
            </li>
          </ul>
        </div>
        Showing {filteredProducts.length} results
      </div>

      <div id="grid">
        {filteredProducts.map((product) => (
          <CartComp
            key={product.id}
            Title={product.Title}
            Price={product.Price}
            PriceBefore={product.PriceBefore}
            Desc={product.Desc}
            image={product.image}
            category={product.category}
            Size={product.Size}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
