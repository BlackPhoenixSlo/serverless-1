// googleSheetsService.js

const { google } = require('googleapis');
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuthToken() {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS); // Assuming GOOGLE_CREDENTIALS contains the JSON key file content as a string

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});
  const authToken = await auth.getClient();
  return authToken;
}

async function getSpreadSheet({spreadsheetId, auth}) {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  return res;
}

async function getSpreadSheetValues({spreadsheetId, auth, range}) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range // Using the 'range' parameter directly
  });
  return res;
}



module.exports = {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues
}

  //   export GCLOUD_PROJECT=test-sheets-407121
//   export GOOGLE_APPLICATION_CREDENTIALS=./test-sheets-407121-6e29ecef7e3f.json
//   node test.js 1SZwDpZO7rvLrijKq9dtgdOP4tffr-KzhQB1JsPXBj8I Sheet1