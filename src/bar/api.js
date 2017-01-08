export function fetchBars() {
  return fetch('/data/bars.json')
    .then((bars) => bars.json());
}
