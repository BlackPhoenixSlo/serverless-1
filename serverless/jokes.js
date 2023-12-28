const { main } = require('./index-runfromdesktop'); // Replace with your actual module path


exports.handler = async (event) => {
  try {
      // Extract parameters from the event object if needed
      // const params = event.queryStringParameters;

      // Call your core functionality
      const data = await main();

      return {
          statusCode: 200,
          body: JSON.stringify(data)
      };
  } catch (error) {
      console.error('Error:', error);
      return {
          statusCode: 500,
          body: JSON.stringify({ message: 'Internal Server Error' })
      };
  }
};