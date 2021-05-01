import "./styles.scss";
import { Link } from "react-router-dom";

function NewProduct({ product }) {
  return (
    <Link className="NewProduct" to={`products/${product.id}`}>
      <img className="NewProduct__img" src={product.image} alt={product.name} />
      <h4 className="NewProduct__name">{product.name}</h4>
      <p className="NewProduct__price">€{product.price}</p>
    </Link>
  );
}

export default NewProduct;
