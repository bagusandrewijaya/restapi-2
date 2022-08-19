var response = require('./response');
var connection = require('./database');

exports.index = function (req,res) {
    response.ok("mysql connected",res);
}