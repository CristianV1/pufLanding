import "./MainSection.scss";
import BigButton from "../../BigButton/BigButton";

interface Props {
  message: String;
  images: string[];
}

const MainSection: React.FC<Props> = ({ message, images }) => {
  let centerShopButton = {
    position: "absolute",
    left: "50%",
    top: "70%",
    transform: "translate(-49%, -50%)",
  };

  return (
    <div className="mainSection__container">
      <div className="mainSection__slider">
        <div className="mainSection__slides">
          {images.map((img: string, idx: number) => {
            return (
              <input
                key={idx}
                type="radio"
                name="radios"
                {...(idx === 0 ? { defaultChecked: true } : {})}
                id={`radio${idx + 1}`}
              />
            );
          })}
          {images.map((img: string, idx: number) => {
            return (
              <div
                key={idx}
                className={`mainSection__slides__slide ${
                  idx === 0 ? "first" : ""
                }`}
              >
                <img src={img} />
              </div>
            );
          })}
          {
            <div className="mainSection__manualNavigation">
              {images.map((img: string, idx: number) => {
                return (
                  <label
                    key={idx}
                    className="mainSection__manualNavigation__btn"
                    htmlFor={`radio${idx + 1}`}
                  />
                );
              })}
            </div>
          }
        </div>
      </div>
      <span className="mainSection__message">{message}</span>
      <BigButton aditionalStyles={centerShopButton} message="SHOP" />
    </div>
  );
};

export default MainSection;
