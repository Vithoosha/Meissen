const formatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

export function formatPrice(price) {
  return formatter.format(price);
}

export const menu_links = [
  {
    id: 100,
    text: "Home",
    ur: "/",
  },
  {
    id: 101,
    text: "Products",
    url: "/products",
  },
  {
    id: 102,
    text: "Craftsmanship",
    url: "/",
  },
];
