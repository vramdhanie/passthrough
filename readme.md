#Pass Through Server
A simple pass through server for accessing brewerydb API from a client. 

Only a few endpoints are exposed by default.

##How to Use
Clone this repository and run

`npm install`

to install dependencies.

Then set your brewerydb API key in the config.js file and run

`npm start`

By default the server starts on port 3000.

##Endpoints
###/beers
This endpoint maps to /search on the BreweryDB API. It accepts a query  q
which is the search term and returns the response from the API. 

To test this API use postman or otherwise and call:

`http://localhost:3000/beers?q=coors`

