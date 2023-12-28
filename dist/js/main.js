const fetchData = async () => {
  const url = "/.netlify/functions/jokes";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayData = (data) => {
  // Assuming data is an array of arrays, and you want to display the first row's values
  
 
        document.querySelector('.bot-signal').textContent = "Bot signal: " + data[0][0];
        document.querySelector('.eth-position').textContent = "Eth position: " + data[0][1];
        document.querySelector('.total-profit').textContent = "Total profit: " + data[0][2];




};

const refreshData = async () => {
  document.querySelector('.bot-signal').textContent = "Bot signal: Loading." ;
  document.querySelector('.eth-position').textContent = "Eth position: Loading.. " ;
  document.querySelector('.total-profit').textContent = "Total profit: Loading...";
  const data = await fetchData();
  displayData(data);
};

// Load initial data
refreshData();

setInterval(refreshData, 10000);
