const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetcTodos() {
//     console.log('Feth todo started');
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((res) => res.json());
// }

// fetcTodos().then((data) => console.log(data))
// .catch((err) => console.log('Error', err));

async function fetchAsyncTodos() {
  try {
    const response = await fetch(url);
    const data = await response.json();
  return data;
  } catch (e) {
    console.log(e);
  } finally {
    console.log('finally');
  }
}

fetchAsyncTodos()
// .then((data) => data.forEach((data) => console.log(data)))

