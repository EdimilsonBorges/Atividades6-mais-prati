import { useCart } from "../../context/CartContext";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";
import styles from "../CardItems/style.module.css";

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
    <section className={styles.cardItemsContainer}>
      <img className={styles.imgItemsCard} src={img} alt={title} />
      <h2 className={styles.titleItemsCard}>{title}</h2>
      <span className={styles.priceItemsCard}>{price}</span>

        <button
          onClick={handleAddRemoveToCart}
          className={isInCart ? styles.iconsShoppingAddCart : styles.iconsShopping}
        >
          
          {isInCart ? <img title="Remover do carrinho." className={styles.iconLink} src={ShoppingCart} alt="Shopping cart" />:<img title="Adicionar ao carrinho." className={styles.iconLink} src={ShoppingCart} alt="Shopping cart" />}
        </button>
    </section>
  );
}

export default CardItems;
