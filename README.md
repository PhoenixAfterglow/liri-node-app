# liri-node-app
# by Johnny Maravelis

# LIRI Bot

Language Interpretation and Recognition Interface (LIRI) is a bot similar to SIRI that presently is capable of pulling up a song, seek song information, as well as preview that song.  Another task LIRI can execute is look up movie information, including the title, release year, IMDB rating, and more.

### Prerequisites

If you don't have Visual Studio Code, Node.js and / or Terminal / GitBash installed, you will not be able to run this app.

## Getting Started

Open the liri.js app file in Terminal / Bash and run NodeJS.  Here are the following line commands:
`node liri.js movie-this '<movie name here>'`
`node liri.js spotify-this-song '<song name here>'`
`node liri.js do-what-it-says`

Note that "Do what it says" will allow the user to choose what it wants LIRI to do, i.e. "spotify-this-song,'I Want it That Way'"



## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Git](https://git-scm.com/) - The terminal / bash framework used

## Dependencies

* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
* [fs](https://www.npmjs.com/package/fs) - Security holding package
* [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) - A simple to use API library for the Spotify REST API.

## Author

* **Johnny Maravelis** - *Homework for UNH Bootcamp* - [PhoenixAfterglow](https://github.com/PhoenixAfterglow/liri-node-app)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to UNH Bootcamp instructor / TAs for clearing things up when I hit my head against many walls.
