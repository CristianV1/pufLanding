import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";
import "./FooterSection.scss";
import { GiCheckedShield } from "react-icons/gi";
import { MdAssignment } from "react-icons/md";
const FooterSection = () => {
  return (
    <div className="FooterSection__container">
      <span className="FooterSection__logo">PUFI</span>
      <ul className="FooterSection__item">
        <li>PUFI RAIN</li>
        <li>PUFI PUFF</li>
        <li>PUFI CART</li>
        <li>PUFI NAP</li>
      </ul>

      <ul className="FooterSection__item">
        <li>CONTACTO</li>
        <li>AYUDA</li>
        <li>COMO COMPRAR</li>
        <li>TERMINOS & CONDICIONES</li>
      </ul>

      <ul className="FooterSection__item">
        <li>COMPRA 100% SEGURA</li>
        <li>
          <img />
          <MdAssignment className="FooterSection__item__security--icon" />
          <GiCheckedShield className="FooterSection__item__security--icon" />
          <span className="FooterSection__item__aditionalText">
            COMPRA CON GARANTIA PUFI
          </span>
        </li>
      </ul>

      <ul className="FooterSection__item">
        <li className="FooterSection__item__socialMedia">
          <span>SEGUINOS EN </span>
          <RiFacebookFill />
          <RiTwitterFill />
          <RiInstagramFill />
        </li>
      </ul>
    </div>
  );
};

export default FooterSection;
