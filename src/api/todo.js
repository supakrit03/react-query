export function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
}
