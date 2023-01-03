const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

// App Set //
const PORT = process.env.PORT || 5000;

// source in your routes
const statesRouter = require('./routes/states.router')

/** ----------MIDDLEWARE---------------- */
app.use(bodyParser.json()); // needed for axios request
app.use(express.static('build')); // for static files


/** ----------------EXPRESS ROUTES -------------- */
app.use('/states', statesRouter);














// START SERVER
app.listen(PORT, () => {console.log('Express Server is Up');
})

