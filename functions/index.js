const functions = require("firebase-functions");
const config = functions.config();
const { google } = require("googleapis");
const { getJwtClient } = require("./jwtClient");
const moment = require("moment");

let client_credentials = config.client_credentials
client_credentials.private_key = decodeURI(client_credentials.private_key);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


exports.getAlbums = functions.https.onRequest((request, response) => {
	functions.logger.info("Hello logs!", { structuredData: true });
	response.send("Hello from Firebase!");
});

exports.getPhotosForAlbum = functions.https.onRequest((request, response) => {
	functions.logger.info("Hello logs!", { structuredData: true });
	response.send("Hello from Firebase!");
});

// Minimum time starts from last month
const getTimeMin = () => {
	let now = moment()
	now.subtract(1, "month")
	return now.toDate();
};


/**
 * getCalendarEvents
 * GET - gets all calendar events from "JCC Events" calendar.
 * 
 * An example of event looks like this:
 * { 
 *  summary: String, 
 *  description: String, 
 *  start: String (ISO format), 
 *  end: String (ISO format), 
 *  location: String, 
 *  attachments: Array
 * }
 * 
 * @consumes nothing
 * @produces application/json
 * @returns 200 
 */
exports.getCalendarEvents = functions.https.onRequest(
	async (request, response) => {
		let credentials = client_credentials;
		let jwtClient = await getJwtClient(credentials, "https://www.googleapis.com/auth/calendar");
		let resp = await google.calendar("v3").events.list({
			auth: jwtClient,
			calendarId: "ng9mjvas1i5li0kv4bhd926p54@group.calendar.google.com",
			timeMin: getTimeMin().toISOString(),
			maxResults: 150,
			singleEvents: true,
			orderBy: "startTime",
		});

		let items = resp.data.items.map((i) => {
			return {
				summary: i.summary,
				description: i.description,
				start: i.start?.dateTime,
				end: i.end?.dateTime,
				location: i.location,
				attachments: i.attachments,
			};
		});

		response.status(200).send(items);
	}
);
