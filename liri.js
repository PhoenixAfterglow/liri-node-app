// Read / set environment variables dotenv.
require("dotenv").config();
// Import keys.js file.
var keys = require("./keys.js");
// Import FS package for read / write.
var fs = require("fs");
// Import Axios package from NPM
var axios = require("axios");
// Import Node Spotify API from NPM
var Spotify = require('node-spotify-api');
// Access personal key information:
var spotify = new Spotify(keys.spotify);

// User's input into the command line
var userAction = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

function switchCase(action, search) {
    // Switch case statements
    switch (action) {
      
    //   case 'concert-this':
    //     grabBand();
    //     break;

      case "spotify-this-song":
        grabSong(search);
        break;
      
      case "movie-this":
        grabMovie(search);
        break;
  
      case "do-what-it-says":
        doWhatItSays();
        break;
  
        default:                            // This is used for if there is a missing ' break ' in any of the statements 
        console.log("Something Broke");
        break;
  
    }
  };

// -------  `node liri.js concert-this <artist/band name here>` -------
// NOTE:  Need to make Axios / BandsInTown to work.  Same may be true with OMDB and Spotify.
// `"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`
// To add: Venue: Location: Date: (using moment.js) "MM/DD/YYYY"

//  ------- `node liri.js movie-this '<movie name here>'` -------
  function grabMovie(parameter) {
    // console.log("Is it on Prime?");
  
    var findMovie;
    // Testing if search term is included with: movie-this '<movie name here>'
    if (parameter === undefined) {
      findMovie = "Mr. Nobody";
    } else {
      findMovie = parameter;
    };
  
    var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=trilogy";
  
    console.log(queryUrl);
    // Code used from OMDB


    axios.get(queryUrl).then(function(response) {
      // console.log(response.data);
      
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value); // tomatoRating does not work but this does?
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      
    });
  };
  
// ------- `node liri.js spotify-this-song '<song name here>'` -------

  function grabSong(parameter) {
    console.log("Music!");
    // Spotify variable loading keys from keys.js
    // (Not needed).
    console.log(parameter);
    // For spotify-this-song '<song name here>'
    var searchTrack;
    if (parameter === undefined) {
      searchTrack = "The Sign";
    } else {
      searchTrack = parameter;
    }
    // Launching Spotify Search copied from "npmjs node-spotify-api" site
    spotify.search({
      type: 'track',
      query: searchTrack
    }, function(error, data) {
      if (error) {
        console.log('Error occurred: ' + error);
        return;
      } else {
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Preview: " + data.tracks.items[0].preview_url); // Needed to be changed to pull from 3rd spot in array
      }
    });
  };

// -------  `node liri.js do-what-it-says` -------

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    // We will then print the contents of data
    // console.log(data);

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    // We will then re-display the content as an array for later use.
    console.log(dataArr);
    // Next line invokes Liri's switchcase with values from random.txt file, requiring 2 arguments.
    switchCase(dataArr[0], dataArr[1]);
  });
};

switchCase(userAction, userSearch);