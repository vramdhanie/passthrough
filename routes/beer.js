var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var config = require('../config');

/* Passthrough for the beer endpoints */
router.get('/', function(req, res, next) {
    var url = "http://api.brewerydb.com/v2/search";
    var q = req.query.q;

    var Request = unirest
        .get(url)
        .query({key:config.key,q:q});

    Request.end(function(response){
        res.json(response.body);
    });

});

module.exports = router;
