const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

const session = require('express-session');
const passport = require('passport');
const LocalPassport = require('./config/passport_local_strategy');
const MongoDBStore = require('connect-mongodb-session')(session);


const SassMiddleware = require('node-sass-middleware');

app.use(SassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix:'/css'
}));

app.use(express.urlencoded());

app.use(cookieParser());

app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    name:'Word-file',
    secret:'Samiran',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store : new MongoDBStore({
        uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
        collection: 'mySessions'
      })
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.checkAuthtenticatedUser);

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){console.log(err); return}

    console.log('Server is running on port', port);
});