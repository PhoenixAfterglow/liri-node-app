// Read / set environment variables dotenv.
require("dotenv").config();
// Import keys.js file.
var keys = require("./keys.js");
// Import FS package for read / write.
var fs = require("fs");
// Access personal key information:
var spotify = new Spotify(keys.spotify);

function switchCase() {
    // Switch case statements
    switch (action) {
      
    //   case 'concert-this':
    //     grabBand();
    //     break;

      case "spotify-this-song":
        grabSong();
        break;
      
      case "movie-this":
        grabMovie();
        break;
  
      case "do-what-it-says":
        grabReadme();
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
  function grabMovie() {
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
    request(queryUrl, function(err, res, body) {
  
      if (!err && res.statusCode === 200) {
  
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value); // tomatoRating does not work but this does?
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
      }
    });
  };
  
// ------- `node liri.js spotify-this-song '<song name here>'` -------

  function grabSong() {
    console.log("Music!");
    // Spotify variable loading keys from keys.js
    var spotify = new Spotify({
      id: keys.spotifyKeys.client_ID,
      secret: keys.spotifyKeys.client_secret
    });
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
        console.log("Preview: " + data.tracks.items[3].preview_url); // Needed to be changed to pull from 3rd spot in array
      }
    });
  };

// -------  `node liri.js do-what-it-says` -------
// NOTE: Need to us fs.  Not quite sure what to do here.