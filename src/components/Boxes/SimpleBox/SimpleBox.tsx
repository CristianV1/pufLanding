import { ReactNode } from "react";
import "./SimpleBox.scss";

interface SimpleBoxProps {
  img: string;
  darkBackground?: boolean;
  data?: ReactNode;
  children?: JSX.Element;
}

const SimpleBox: React.FC<SimpleBoxProps> = ({
  img,
  darkBackground,
  children,
  data,
}) => {
  return (
    <div className="simpleBox__container">
      {darkBackground && <div className="simpleBox__darkBackground"></div>}
      <img className="simpleBox__image" src={img} />
      <div className="simpleBox__aditional">{data}</div>
    </div>
  );
};

export default SimpleBox;
