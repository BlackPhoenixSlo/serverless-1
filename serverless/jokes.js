require('dotenv').config();




const { getAuthToken, getSpreadSheetValues } = require('./googleSheetsService');

exports.handler = async (event, context) => {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId: "1SZwDpZO7rvLrijKq9dtgdOP4tffr-KzhQB1JsPXBj8I",
      range: 'Overview!D5:F5',
      auth
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data.values)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Error fetching data', error: error.message })
    };
  }
};
