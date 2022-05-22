import "./BigButton.scss";

interface Props {
  message: string;
  aditionalStyles?: object;
}

const BigButton: React.FC<Props> = ({ message, aditionalStyles }) => {
  return (
    <>
      <input
        className="BigButton__btn "
        style={aditionalStyles}
        type="button"
        value={message}
      />
    </>
  );
};

export default BigButton;
