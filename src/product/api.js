export function fetchProducts() {
  return fetch('/data/products.json')
    .then((products) => products.json());
}
