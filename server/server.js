const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');



// source in your routes
const userRouter = require('./routes/user.router');

/** ----------MIDDLEWARE---------------- */
app.use(bodyParser.json()); // needed for axios request
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('build')); // for static files

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/** ----------------EXPRESS ROUTES -------------- */
app.use('/api/user', userRouter);









// App Set //
const PORT = process.env.PORT || 5000;


// START SERVER
app.listen(PORT, () => {console.log('Express Server is Up on port:', PORT);
})

