const { ThreeDRotation } = require("@material-ui/icons");
const functions = require("firebase-functions");
const credentials = require("./credentials.json");
const { google } = require("googleapis");
const { getJwtClient } = require("./jwtClient");
const moment = require("moment");

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

// Sets the time to be the latest 9/1 that has passed
const getTimeMin = () => {
	// If today is after 9/1/current-year, timeMin is 9/1/current-year
	// else, timeMin is 9/1/last year
	let now = moment();
	now.set("hour", 0);
	now.set("minute", 0);
	now.set("second", 0);
	if (now.month() >= 8) {
		now.set("month", 8);
		now.set("date", 1);
	} else {
		now.set("month", 8);
		now.set("date", 1);
		now.set("year", now.year() - 1);
	}
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
		let jwtClient = await getJwtClient(
			credentials,
			"https://www.googleapis.com/auth/calendar"
		);
		let resp = await google.calendar("v3").events.list({
			auth: jwtClient,
			calendarId: "ng9mjvas1i5li0kv4bhd926p54@group.calendar.google.com",
			timeMin: getTimeMin(),
			maxResults: 50,
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
