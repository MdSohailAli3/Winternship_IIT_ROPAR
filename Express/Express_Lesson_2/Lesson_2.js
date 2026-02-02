const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Greenfield Community Center!');
});

// Mount the events router at /events
const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter);

const classesRouter = require('./routes/classes');
app.use('/classes', classesRouter);

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);


//public- static data
app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
    console.log(`Community Center server running at http://localhost:${port}`);
});