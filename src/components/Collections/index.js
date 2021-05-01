import "./styles.scss";
import { data } from "../../assets/data";
import Collection from "../Collection";

function Collections() {
  return (
    <section className="wrapper">
      <h3 className="Collections_title">discover our collections</h3>
      <div className="Collections">
        {data.map((item) => {
          return <Collection item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}

export default Collections;
