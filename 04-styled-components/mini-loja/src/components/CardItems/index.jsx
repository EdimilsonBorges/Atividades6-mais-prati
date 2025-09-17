import { useCart } from "../../context/CartContext";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";
import { CardItemsContainer, ImgItemsCard, TitleItemsCard, PriceItemsCard, IconsShopping, IconsShoppingAddCart, IconLink } from "./style";

function CardItems({ img, title, price }) {

  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some(item => item.title === title);

  const handleAddRemoveToCart = () => {
    if (!isInCart) {
      addToCart({ img, title, price });
    } else {
      removeFromCart(title);
    }
  };

  return (
    <CardItemsContainer>
      <ImgItemsCard src={img} alt={title} />
      <TitleItemsCard>{title}</TitleItemsCard>
      <PriceItemsCard>{price}</PriceItemsCard>

      {isInCart ?
        <IconsShoppingAddCart onClick={handleAddRemoveToCart}>
          <IconLink title={"Remover do carrinho."} src={ShoppingCart} alt="Shopping cart" />
        </IconsShoppingAddCart> :
        <IconsShopping onClick={handleAddRemoveToCart}>
          <IconLink title={"Adicionar ao carrinho."} src={ShoppingCart} alt="Shopping cart" />
        </IconsShopping>
      }

    </CardItemsContainer>
  );
}

export default CardItems;
