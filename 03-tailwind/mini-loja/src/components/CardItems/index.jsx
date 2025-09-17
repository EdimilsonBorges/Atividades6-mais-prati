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
    <section className="flex flex-col border border-[#E1E1E1] overflow-hidden">
      <img className="h-[300px] p-2 transition-transform duration-200 ease-in-out hover:scale-110 hover:opacity-90" src={img} alt={title} />
      <h2 className="p-2 text-[1.2rem] text-center text-[var(--text-color)]">{title}</h2>
      <span className="pb-4 text-[1.2rem] text-center text-[#F94343]">{price}</span>

        <button
          onClick={handleAddRemoveToCart}
          className={isInCart ? "flex justify-center items-center p-[10px] cursor-pointer bg-[#F94343] border-0" : "flex justify-center items-center p-[10px] cursor-pointer bg-[var(--secondary-color)] border-0 hover:bg-[#F94343]"}
        >
          {isInCart ? <img title="Remover do carrinho." className="h-[25px]" src={ShoppingCart} alt="Shopping cart" />:<img title="Adicionar ao carrinho." className="h-[25px]" src={ShoppingCart} alt="Shopping cart" />}
        </button>
    </section>
  );
}

export default CardItems;
