const fetchData = async () => {
  const url = "/.netlify/functions/jokes";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayData = (data) => {
  const h1 = document.querySelector("h1");
  // Assuming data is an array of arrays, and you want to display the first row's values
  h1.textContent = data[0].join(', '); // This will display the array values as a comma-separated string
};

const refreshData = async () => {
  const data = await fetchData();
  displayData(data);
};

// Load initial data
refreshData();

setInterval(refreshData, 10000);
