import "./styles.scss";
import { corporate, faq, legal, service } from "../../assets/footer";

function Footer() {
  return (
    <footer className="container">
      <section className="Footer">
        <div className="corporate">
          <h5>corporate</h5>
          <ul>
            {corporate.map((i) => {
              const { text, url, id } = i;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="faq">
          <h5>FAQ</h5>
          <ul>
            {faq.map((i) => {
              const { text, url, id } = i;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="legal">
          <h5>legal</h5>
          <ul>
            {legal.map((i) => {
              const { text, url, id } = i;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="service">
          <h5>service</h5>
          <ul>
            {service.map((i) => {
              const { text, url, id } = i;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
