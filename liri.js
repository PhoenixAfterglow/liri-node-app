// Invoke npm dotenv
require("dotenv").config();
// Import keys.js file.
var keys = require("./keys.js");
// Access personal key information:s
var spotify = new Spotify(keys.spotify);

function switchCase() {
    // Switch case statements
    switch (action) {
  
      case 'spotify-this-song':
        grabSong();
        break;
  
      case 'movie-this':
        grabMovie();
        break;
  
      case 'do-what-it-says':
        grabReadme();
        break;
  
        default:                            // This is used for if there is a missing ' break ' in any of the statements 
        console.log("Something Broke");
        break;
  
    }
  };