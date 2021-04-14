import "./styles.scss";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader, ErrorMessage } from "../../components";
import { ReactComponent as Close } from "../../assets/image/close.svg";
import { ProductsContext } from "../../store/context/ProductsProvider";

function Product() {
  const { id } = useParams();

  const {
    productIsLoading: isLoading,
    productHasError: hasError,
    getProduct,
    product,
  } = useContext(ProductsContext);

  useEffect(() => {
    getProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { image, name, collection, year, type, price, description } = product;

  if (isLoading) {
    return <Loader />;
  }
  if (hasError) {
    return <ErrorMessage />;
  }

  return (
    <main className="Product">
      <button className="close_btn">
        <Close />
      </button>
      <div className="Product_info">
        <img src={image} alt={name} />

        <div className="Product_texts">
          <h1>{name}</h1>
          <h2>{collection}</h2>
          <p>{description}</p>
          <ul>
            <li>
              <span>type:</span> {type}
            </li>
            <li>
              <span>year:</span> {year}
            </li>
          </ul>
          <p className="Product_price">€{price}</p>
        </div>
        <div className="Product_cart">
          <button>Add to cart</button>
        </div>
      </div>
    </main>
  );
}

export default Product;
