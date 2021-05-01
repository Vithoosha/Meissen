import "./styles.scss";
import Button from "../Button";

function Collection({ item }) {
  return (
    <div className="Collection">
      <img src={item.image} alt="" className="Collection__image" />
      <div className="Collection__text">
        <h4 className="Collection__title"> {item.title}</h4>
        <p className="Collection__info">{item.info}</p>
        <Button color="secondary" text="Shop Now" link={item.url} />
      </div>
    </div>
  );
}

export default Collection;
