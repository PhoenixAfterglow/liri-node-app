// Invoke npm dotenv
require("dotenv").config();
// Import keys.js file.
var keys = require("./keys.js");
// Access personal key information:s
var spotify = new Spotify(keys.spotify);