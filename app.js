var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var graphQLHTTP = require('express-graphql');
var graphql = require ('graphql').graphql;
var Schema = require('./build/graphql');
var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);

// var sessionOptions = {
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true,
//   store: new MongoStore({
//     url: 'URL'
//   })
// }

// var query = 'query { todos { id, title, completed } }'
// graphql(Schema, query).then( function(result) {
//   console.log(JSON.stringify(result));
//   // Prints
//   // {
//   //   "data":{
//   //     "todos":[
//   //       {
//   //         "id":1446412739542,
//   //         "title":"Read emails",
//   //         "completed":false
//   //       },
//   //       {
//   //         "id":1446412740883,
//   //         "title":"Buy orange",
//   //         "completed":true
//   //       }
//   //     ]
//   //   }
//   // }
// });


var app = express();






// app.use(session(sessionOptions));
app.use('/graphql', graphQLHTTP({ schema: Schema, pretty: true }))
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public')); // couldn't find skeleton without this
// app.use('/dist', express.static('public'));

// routes
// app.use('/api/locations', locations);


module.exports = app;
