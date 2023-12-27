const fetch = require("node-fetch");


const { getAuthToken, getSpreadSheetValues } = require('./googleSheetsService');
require('dotenv').config();



const { getAuthToken, getSpreadSheetValues } = require('./googleSheetsService');

exports.handler = async (event, context) => {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId: "1SZwDpZO7rvLrijKq9dtgdOP4tffr-KzhQB1JsPXBj8I",
      range: 'Overview!D5:F5', // Adjust the range as needed
      auth
    });

    const text =  json(response.data.values);


    return text;
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Error fetching data', error: error.message })
    };
  }
};
