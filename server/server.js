const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 5000;
// source in your routes
const statesRouter = require('./routes/states.router')

/** ----------MIDDLEWARE---------------- */
app.use(bodyParser.json()); // needed for axios request
app.use(express.static('build'));


/** ----------------EXPRESS ROUTES -------------- */
app.use('/states', statesRouter);














// START SERVER
app.listen(port, () => {console.log('Express is ready');
})

