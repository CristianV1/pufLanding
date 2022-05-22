import "./DetailsBox.scss";

interface DetailBoxProps {
  icon?: string;
  title: string;
  description?: string;
  showMore?: string;
  arrow?: string;
}

const DetailsBox: React.FC<DetailBoxProps> = ({
  icon,
  title,
  description,
  showMore,
  arrow,
}) => {
  return (
    <div className="detailsBox__container">
      {arrow && arrow === "left" ? (
        <div className="detailsBox__arrow--left"></div>
      ) : arrow === "right" ? (
        <div className="detailsBox__arrow--right"></div>
      ) : (
        <></>
      )}
      {icon && <img className="detailsBox__icon" src={icon} />}
      {title && <span className="detailsBox__title">{title}</span>}
      <div className="detailsBox__littleBorder"></div>
      {description && <p className="detailsBox__description">{description}</p>}

      {showMore && (
        <span className="detailsBox__showMore">
          <span className="detailsBox__showMore--arrow">{">"}</span>
          {showMore}
        </span>
      )}
    </div>
  );
};

export default DetailsBox;
