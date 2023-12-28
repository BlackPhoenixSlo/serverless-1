const getRandomDadJoke = async () => {
  // const url = "https://icanhazdadjoke.com/";
  // const jokeStream = await fetch(url, {
  //   headers: {
  //     Accept: "application/json"
  //   }
  // }); 
  const url = "/.netlify/functions/jokes";
  const jokeStream = await fetch(url);
  const jsonJoke = await jokeStream.json();
  console.log(jsonJoke)
  const joke = jsonJoke;
  return joke;
};

const displayJoke = (jokeObject) => {
  const h1 = document.querySelector("h1");
  h1.textContent = jokeObject.joke; // Accessing the 'joke' property of the joke object
};


const refreshJoke = async () => {
  const joke = await getRandomDadJoke();
  displayJoke(joke);
};

// load 1st joke
refreshJoke();

setInterval(refreshJoke, 10000);
