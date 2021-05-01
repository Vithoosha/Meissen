import "./styles.scss";

function Button({ link, text, color }) {
  return (
    <a href={link} className={`Button ${color}`}>
      {text}
    </a>
  );
}

export default Button;
