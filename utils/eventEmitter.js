const EventEmitter = require("events");

class CampusEventEmitter extends EventEmitter {}

const campusEvents = new CampusEventEmitter();

module.exports = campusEvents;
