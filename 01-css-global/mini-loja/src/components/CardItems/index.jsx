import { useCart } from "../../context/CartContext";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";

function CardItems({img, title, price }) {
  const { cart, addToCart, removeFromCart} = useCart();

  const isInCart = cart.some(item => item.title === title);

  const handleAddRemoveToCart = () => {
    if (!isInCart) {
      addToCart({ img, title, price });
    } else {
      removeFromCart(title);
    }
  };

  return (
    <section className="card-items-container">
      <img className="img-items-card" src={img} alt={title} />
      <h2 className="title-items-card">{title}</h2>
      <span className="price-items-card">{price}</span>

        <button
          onClick={handleAddRemoveToCart}
          className={isInCart ? "icons-shopping-add-cart" : "icons-shopping"}
        >
          
          {isInCart ? <img title="Remover do carrinho." className="icon-link" src={ShoppingCart} alt="Shopping cart" />:<img title="Adicionar ao carrinho." className="icon-link" src={ShoppingCart} alt="Shopping cart" />}
        </button>
    </section>
  );
}

export default CardItems;
