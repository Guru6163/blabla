import { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/CartContext";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <Link to={`/product/` + product.id}>
        <button>
          <div>
            <img className="product_image" src={product.image} alt="" />

            <div className="product_text">
              <div className="product__name">{product.name}</div>
              <div className="product__rating">Rating:{product.rating}</div>
              <div className="product__price">
                <h5>Price: {product.price}</h5>
              </div>
            </div>
          </div>

          <button
            style={{ marginTop: "10px" }}
            className="ProductCard__button"
            onClick={() => addToCart(product)}
          >
            View Product
          </button>
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
