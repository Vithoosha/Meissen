import "./styles.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { ProductsContext } from "../../store/context/ProductsProvider";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import NewProduct from "../NewProduct";

function NewProducts() {
  const { newProducts, isLoading, hasError } = useContext(ProductsContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  if (isLoading) {
    return <Loader />;
  }
  if (hasError) {
    return <ErrorMessage />;
  }
  return (
    <section className="wrapper">
      <div className="NewProducts">
        <h3 className="NewProducts__title">New products</h3>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {newProducts.map((product) => {
            return <NewProduct key={product.id} product={product} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default NewProducts;
