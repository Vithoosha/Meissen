import "./styles.scss";

function Newsletter() {
  return (
    <section className="wrapper bgcolor">
      <div className="Newsletter">
        <div className="Newsletter__body">
          <h3 className="Newsletter__title">newsletter registration</h3>
          <p className="Newsletter__text">
            We regularly surprise you with individual offers, product news and
            exciting stories from Europe's oldest porcelain factory.
          </p>
          <form className="Newsletter__form">
            <input
              type="email"
              placeholder="enter your email"
              className="Newsletter__input"
            />
            <button type="submit" className="Newsletter__btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
