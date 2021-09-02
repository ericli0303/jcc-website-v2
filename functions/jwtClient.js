const { google } = require("googleapis");

// apiURL example: "https://www.googleapis.com/auth/calendar"
// credentials should have: 1. client_email 2. private_key



// Get back an authorized JWTClient to authorize a given API
async function getJwtClient(credentials, apiURL) {
  let jwtClient = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    [apiURL],
    null
  );
  await jwtClient.authorize();
  return jwtClient;
}

module.exports = {
  getJwtClient
}