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

const displayData = (data) => {
  // Assuming data is an array of arrays, and you want to display the first row's values
  
 
        document.querySelector('.bot-signal').textContent = "Bot signal: " + data[0][0];
        document.querySelector('.eth-position').textContent = "Eth position: " + data[0][1];
        document.querySelector('.total-profit').textContent = "Total profit: " + data[0][2];




};


const refreshJoke = async () => {
  document.querySelector('.bot-signal').textContent = "Bot signal: Loading." ;
  document.querySelector('.eth-position').textContent = "Eth position: Loading.. " ;
  document.querySelector('.total-profit').textContent = "Total profit: Loading...";
  const joke = await getRandomDadJoke();
  displayData(joke);

};

// load 1st joke
refreshJoke();

setInterval(refreshJoke, 690000);
