import "./styles.scss";

function Newsletter() {
  return (
    <section className="wrapper bgcolor">
      <div className="Newsletter">
        <div className="newsletter_body">
          <h3>newsletter registration</h3>
          <p>
            We regularly surprise you with individual offers, product news and
            exciting stories from Europe's oldest porcelain factory.
          </p>
          <form>
            <input type="email" placeholder="enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
