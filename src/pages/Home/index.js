import "./styles.scss";
import { Hero, NewProducts, Newsletter, Collections } from "../../components";

function Home() {
  return (
    <>
      <Hero />
      <main>
        <NewProducts />
        <Newsletter />
        <Collections />
      </main>
    </>
  );
}

export default Home;
