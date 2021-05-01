import "./styles.scss";
import hero from "../../assets/image/hero.png";
import Button from "../Button";

function Hero() {
  return (
    <header className="container">
      <div className="Hero">
        <div className="Hero__text">
          <p className="Hero__firstParagraph">New in</p>
          <h1 className="Hero__title">Meissen Cosmopolitan</h1>
          <h2 className="Hero__subtitle">Giant Bloom</h2>
          <p className="Hero__desc">
            The new “Giant Bloom” collection that is implemented on the service
            form MEISSEN® COSMOPOLITAN, surprises with new floral decors such as
            lilies, hibiscus and peonies. Inspired by the "Giant Bloom" vase
            from the Limited Masterworks 2021, the lavish hand paintings cover
            the porcelains in a stylized form. The interplay of concentrated
            areas of colour and consciously used white space creates a clear and
            inspiring modernity
          </p>
          <Button link="http://localhost:3000/" color="dark" text="Shop Now" />
        </div>
        <img
          src={hero}
          alt=""
          className="Hero__image"
          width="382"
          height="385"
        />
      </div>
    </header>
  );
}

export default Hero;
