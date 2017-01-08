export function fetchDrinks() {
  return fetch('/data/drinks.json')
    .then((drinks) => drinks.json());
}
