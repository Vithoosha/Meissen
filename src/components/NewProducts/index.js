import "./styles.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function NewProducts() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const data = [
    {
      image:
        "https://www.meissen.com/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/6/1/61a163-55810-1_01.png",
      title:
        "Mug, the MEISSEN Mug Collection, Giant Bloom, Hibiscus, shape Berlin, V 0,25 L",
      price: "249.00",
    },
    {
      image:
        "https://www.meissen.com/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/m/p/mpj80bl116c1_01.png",
      title: "set royal blossom basic earrings & collier, 750 rose gold",
      price: "1,290.00",
    },
    {
      image:
        "https://www.meissen.com/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/9/0/90a404-78m22-1_01.png",
      title: "set royal blossom basic earrings & collier, 750 rose gold",
      price: "1,290.00",
    },
    {
      image:
        "https://www.meissen.com/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/7/9/79a450-53274-1_01.png",
      title: "set royal blossom basic earrings & collier, 750 rose gold",
      price: "1,290.00",
    },
    {
      image:
        "https://www.meissen.com/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/0/0/000001-c5006-1_01.png",
      title: "set royal blossom basic earrings & collier, 750 rose gold",
      price: "1,290.00",
    },
  ];
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
          {data.map((newProduct) => {
            const { image, title, price } = newProduct;
            return (
              <a className="newProduct" href="http://localhost:3000/">
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>€{price}</p>
              </a>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default NewProducts;
