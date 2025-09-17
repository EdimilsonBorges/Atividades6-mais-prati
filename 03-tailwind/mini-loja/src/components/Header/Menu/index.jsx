import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from "../../../context/CartContext";
import IconShopping from "../../../assets/icons/shopping-bag.svg";
import '../../../styles/switch.css';

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
      <section className="fixed w-full flex justify-between items-center bg-[var(--bg-color-menu)] h-12 px-12 z-50">
        <nav>
          <ul className="flex justify-center items-center list-none">
            <li><NavLink className="text-gray-200 no-underline text-base font-medium px-4 py-4 transition-all duration-300 ease-in-out hover:bg-red-600 text-[1.2rem]" to={"/"}>Mini Loja</NavLink></li>
            <li><NavLink className="text-gray-200 no-underline text-base font-medium px-4 py-4 transition-all duration-300 ease-in-out hover:bg-red-600 text-[1.2rem]" to={"/"} >Inicio</NavLink></li>
            <li><NavLink className="text-gray-200 no-underline text-base font-medium px-4 py-4 transition-all duration-300 ease-in-out hover:bg-red-600 text-[1.2rem]" to={"/cart"}>Carrinho</NavLink></li>
          </ul>
        </nav>
        <div className="flex justify-center items-center">
          <a className="flex justify-center items-center no-underline" href="/cart"><img src={IconShopping} width={"40px"} alt="" />
            <span className="relative -left-5 inline-flex justify-center items-center text-center rounded-full bg-red-600 text-white w-6 h-6 text-xs font-bold">{cart.length}</span>
          </a>
          <label className="switch relative inline-block w-16 h-11 rounded-full shadow-md text-base">
            <input className="opacity-0 w-0 h-0" id="checkbox" type="checkbox" onChange={handleToggle} checked={!isDark}/>
            <span className="slider absolute top-0 left-0 right-0 bottom-0 bg-gray-800 rounded-full overflow-hidden transition-all duration-400">
              <div className="star absolute w-1.5 h-1.5 bg-white rounded-full transition-all duration-400" style={{ left: '2.5em', top: '0.5em' }} />
              <div className="star absolute w-1.5 h-1.5 bg-white rounded-full transition-all duration-400" style={{ left: '2.2em', top: '1.2em' }} />
              <div className="star absolute w-1.5 h-1.5 bg-white rounded-full transition-all duration-400" style={{ left: '3em', top: '0.9em' }} />
              <svg viewBox="0 0 16 16" className="cloud absolute w-14 bottom-[-1.4em] left-[-1.1em] opacity-0 transition-all duration-400">
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