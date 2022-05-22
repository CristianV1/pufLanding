import { AiOutlineDown } from "react-icons/ai";
import { GiJellyBeans } from "react-icons/gi";
import { BsUmbrella } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { IoMdBed } from "react-icons/io";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <span className="navbar__items--left">Pufi</span>
      <ul className="navbar__items--center">
        <li className="navbar__items--center__item">
          <GiJellyBeans className="navbar__items--center__item__icon" />
          <span>PUFI PUFF</span>
        </li>
        <li className="navbar__items--center__item">
          <BsUmbrella className="navbar__items--center__item__icon rotate" />
          <span>PUFI RAIN</span>
        </li>
        <li className="navbar__items--center__item">
          <CgShoppingBag className="navbar__items--center__item__icon" />
          <span>PUFI CART</span>
        </li>
        <li className="navbar__items--center__item">
          <IoMdBed className="navbar__items--center__item__icon" />
          <span>PUFI NAP</span>
        </li>
      </ul>
      <ul className="navbar__items--right">
        <li className="navbar__items--right__item">
          <span>MI CUENTA</span>
          <AiOutlineDown className="navbar__items--right__item__icon" />
        </li>
        <li className="navbar__items--right__item">
          <span>Mi compra</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
