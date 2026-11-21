
const EventEmitter = require("events");

class CampusEventEmitter extends EventEmitter {}

const campusEvents = new CampusEventEmitter();

// Listen for announcement creation
campusEvents.on("announcementCreated", (announcement) => {
  console.log("New announcement event received:");
  console.log("Title:", announcement.title);
  console.log("Message:", announcement.message);
});

module.exports = campusEvents;
