const formatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

export function formatPrice(price) {
  return formatter.format(price);
}

export const API_Products = "https://practice-mocks-api.herokuapp.com/";

export const menu_links = [
  {
    id: 200,
    text: "Home",
    url: "/",
  },
  {
    id: 201,
    text: "Products",
    url: "/products",
  },
  {
    id: 202,
    text: "Craftsmanship",
    url: "/",
  },
];
