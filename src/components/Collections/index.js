import "./styles.scss";
import { data } from "../../assets/data";

function Collections() {
  return (
    <section className="wrapper">
      <h3 className="coll_title">discover our collections</h3>
      <div className="Collections">
        {data.map((item) => {
          const { title, info, url, id, image } = item;
          return (
            <div key={id} className="coll_body">
              <img src={image} alt="" />
              <div>
                <h4>{title}</h4>
                <p>{info}</p>
                <a href={url}>Shop Now</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Collections;
