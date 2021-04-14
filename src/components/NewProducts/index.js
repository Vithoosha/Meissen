import "./styles.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../store/context/ProductsProvider";

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
        <h3>New products</h3>
        <Carousel
          swipeable={true}
          draggable={true}
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
            const { image, id, name, price } = product;
            return (
              <Link key={id} className="newProduct" to={`products/${id}`}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>€{price}</p>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default NewProducts;
