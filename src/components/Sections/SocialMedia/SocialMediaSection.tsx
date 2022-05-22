import SimpleBox from "../../Boxes/SimpleBox/SimpleBox";
import "./SocialMediaSection.scss";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

interface Props {
  images?: string[];
}

const SocialMediaSection: React.FC<Props> = ({ images }) => {
  let [input, setInput] = useState("");
  let [message, setMessage] = useState({ error: "", successfull: "" });

  const checkEmail = (): void => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input)) {
      setMessage({ ...message, error: "" });
    } else {
      setMessage({ ...message, error: "No es un email valido" });
    }
  };

  return (
    <div className="socialMedia__container">
      <span className="socialMedia__subTitle">INSTAGRAM</span>
      <h4 className="socialMedia__title">#ESPUFI</h4>

      <div className="socialMedia__gallery">
        {images?.map((img, idx) => (
          <SimpleBox key={idx} img={img} />
        ))}
      </div>
      <span className="socialMedia__subTitle">NEWSLETTER</span>
      <h4 className="socialMedia__title">SUSCRIBITE</h4>
      <span className="socialMedia__text">
        Y enterate de todas las novedades
      </span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInput("");
          setMessage({
            ...message,
            successfull: "Correo enviado exitosamente",
          });
          setTimeout(() => {
            setMessage({
              ...message,
              successfull: "",
            });
          }, 3000);
        }}
        className="socialMedia__input__container"
      >
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            checkEmail();
          }}
          className="socialMedia__input"
          type="email"
          placeholder="Ingresa tu email"
        />
        <button className="socialMedia__submit" type="submit">
          <BsArrowRight />
        </button>
      </form>
      <div className="socialMedia__messages">
        {message.error.length > 0 ? (
          <p className="socialMedia__error">{message.error}</p>
        ) : message.successfull.length > 0 ? (
          <p className="socialMedia__sucessfull">{message.successfull}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SocialMediaSection;
