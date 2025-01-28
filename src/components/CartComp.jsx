import React from "react";

const CartComp = ({
  Title,
  Price,
  PriceBefore,
  Desc,
  image,
  category,
  Size,
}) => {
  return (
    <div class="product">
      <div class="info-large">
        <h4>{Title}</h4>
        <div class="sku">
          PRODUCT SKU: <strong>89356</strong>
        </div>

        <div class="price-big">
          <span>{PriceBefore}</span> {Price}
        </div>

        <h3>SIZE</h3>
        <div class="sizes-large">
          <span>{Size}</span>
        </div>

        <button class="add-cart-large">Add To Cart</button>
      </div>
      <div class="make3D">
        <div class="product-front">
          <div class="shadow"></div>
          <img src={image} alt="" />
          <div class="image_overlay"></div>
          <div class="add_to_cart">Add to cart</div>
          <div class="view_gallery">View gallery</div>
          <div class="stats">
            <div class="stats-container">
              <span class="product_price">{Price}</span>
              <span class="product_name">{Title}</span>
              <p>{Desc}</p>

              <div class="product-options">
                <strong>SIZES</strong>
                <span>{Size}</span>
                <strong>Category</strong>
                <span>{category}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product-back">
          <div class="shadow"></div>
          <div class="carousel">
            <ul class="carousel-container">
              <li>
                <img src={image} alt="" />
              </li>
            </ul>
            <div class="arrows-perspective">
              <div class="carouselPrev">
                <div class="y"></div>
                <div class="x"></div>
              </div>
              <div class="carouselNext">
                <div class="y"></div>
                <div class="x"></div>
              </div>
            </div>
          </div>
          <div class="flip-back">
            <div class="cy"></div>
            <div class="cx"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
