import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from "../../../context/CartContext";
import IconShopping from "../../../assets/icons/shopping-bag.svg";
import styles from "../Menu/style.module.css";

function Menu() {

  const { cart } = useCart();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  const handleToggle = () => {
    if (isDark) {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <>
      <section className={styles.sectionMenu}>
        <nav>
          <ul className={styles.listLinksMenuRight}>
            <li><NavLink className={styles.linkMenu} to={"/"}>Mini Loja</NavLink></li>
            <li><NavLink className={styles.linkMenu} to={"/"} >Inicio</NavLink></li>
            <li><NavLink className={styles.linkMenu} to={"/cart"}>Carrinho</NavLink></li>
          </ul>
        </nav>
        <div className={styles.listLinksMenuLeft}>
          <a className={styles.linkBadge} href="/cart"><img src={IconShopping} width={"40px"} alt="" />
            <span className={styles.numbersItemsBadge}>{cart.length}</span>
          </a>
          <label className={styles.switch}>
            <input id="checkbox" type="checkbox" onChange={handleToggle} checked={!isDark}/>
            <span className={styles.slider}>
              <div className={`${styles.star} ${styles.star_1}`} />
              <div className={`${styles.star} ${styles.star_2}`} />
              <div className={`${styles.star} ${styles.star_3}`} />
              <svg viewBox="0 0 16 16" className={`${styles.cloud_1} ${styles.cloud}`}>
                <path transform="matrix(.77976 0 0 .78395-299.99-418.63)" fill="#fff" d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" />
              </svg>
            </span>
          </label>
        </div>


      </section>
    </>
  )
}

export default Menu;