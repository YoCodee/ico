import React, { useState } from "react";
import CartComp from "./CartComp";
import products from "../data/productData";

const ProductCart = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSizeChange = (Size) => {
    setSelectedSize((prev) =>
      prev.includes(Size) ? prev.filter((s) => s !== Size) : [...prev, Size]
    );
  };
  

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesSize =
      selectedSize.length === 0 ||
      selectedSize.some((Size) => product.Size.includes(Size));
    return matchesCategory && matchesSize;
  });

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
            {["Baju", "Celana"].map((category) => (
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
            {["XS", "S", "M", "L", "XL", "XXL"].map((Size) => (
              <li key={Size}>
                <label>
                  <input
                    type="checkbox"
                    value={Size}
                    onChange={() => handleSizeChange(Size)}
                    checked={selectedSize.includes(Size)}
                  />
                  {Size}
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
