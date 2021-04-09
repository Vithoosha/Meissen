import "./styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as CartImg } from "../../assets/image/cart.svg";

function CartIcon() {
  return (
    <div>
      <Link to="/cart" className="icon">
        <CartImg className="cartImg" />
        <span>100</span>
      </Link>
    </div>
  );
}

export default CartIcon;
