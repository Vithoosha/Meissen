import "./styles.scss";
import hero from "../../assets/image/hero.png";

function Hero() {
  return (
    <header className="container">
      <div className="Hero">
        <div className="hero_text">
          <p>New in</p>
          <h1>Meissen Cosmopolitan</h1>
          <h2>Giant Bloom</h2>
          <p className="hero_desc">
            The new “Giant Bloom” collection that is implemented on the service
            form MEISSEN® COSMOPOLITAN, surprises with new floral decors such as
            lilies, hibiscus and peonies. Inspired by the "Giant Bloom" vase
            from the Limited Masterworks 2021, the lavish hand paintings cover
            the porcelains in a stylized form. The interplay of concentrated
            areas of colour and consciously used white space creates a clear and
            inspiring modernity
          </p>
          <a href="http://localhost:3000/">Shop Now</a>
        </div>
        <img src={hero} alt="" />
      </div>
    </header>
  );
}

export default Hero;
