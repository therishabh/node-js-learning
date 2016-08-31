// call the packages we need
var express = require('express'); // call express js
var app = express();
var port = process.env.PORT || 6001; // set our app port
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var dbConfig = require('./_core/config/database');
var router = require('./_core/routes');
var path = require('path');


//***** Log File ******
// app.use(morgan('dev'));
//***** Log File ******


//********Live Reload***********
try {
    if (process.env.ENV === 'dev') {

        var livereload = require('./_core/config/livereload');
        livereload.enable(app);
    }

} catch (e) {
    if (e instanceof Error && e.code === "MODULE_NOT_FOUND")
        console.log("Live reload not loaded");
    else
        throw e;
}
//********Live Reload***********

//***** Database Connectivity *******
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.database);
//***** Database Connectivity *******


//******* view engine and static files *******
app.use(express.static('www'));
app.set('views', 'www');
app.set('view engine', 'jade');
//******* view engine and static files *******


//****** Body Parser *******
// configure app to use bodyparser()
// this will let us get the data form a Post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//****** Body Parser *******


//****** Router *******
app.use(router);
//****** Router *******

//***** Listen *****
//port calling
var server = app.listen(port, function() {
        console.log('Server is running on port : http://localhost:' + port);
    })
    //***** Listen *****
