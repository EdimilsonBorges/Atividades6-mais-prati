import { useCart } from "../../context/CartContext";
import IconLink from "../../assets/icons/icon-link.svg";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";

function CardItems({ img, title, price }) {
  const { cart, addToCart } = useCart();

  const isInCart = cart.some(item => item.title === title);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart({ img, title, price });
    } else {
      alert("Este produto já está no carrinho!");
    }
  };

  return (
    <section className="card-items-container">
      <img className="img-items-card" src={img} alt={title} />
      <h2 className="title-items-card">{title}</h2>
      <span className="price-items-card">{price}</span>

      <div className="links-icons">
        <button
          onClick={handleAddToCart}
          className="icons-shopping"
          style={{ cursor: isInCart ? "not-allowed" : "pointer" }}
          disabled={isInCart}
        >
          
          {isInCart ? <img className="icon-link" src={ShoppingCart} alt="Shopping cart" />:<img className="icon-link" src={ShoppingCart} alt="Shopping cart" />}
        </button>

        <a href="#" className="icons-shopping">
          <img className="icon-link" src={IconLink} alt="Link cart" />
        </a>
      </div>
    </section>
  );
}

export default CardItems;
