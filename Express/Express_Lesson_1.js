import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Greenfield Community Center!');
});

app.get('/events', (req, res) => {
    const events = [
        'Yoga Class - Monday 7pm',
        'Gardening Workshop - Wednesday 5pm',
        'Book Club - Friday 6pm'
    ];
    res.json(events);
});

app.get('/contacts', (req,res) => {
    const contacts = {
        email : 'greenfield@gmail.com',
        phone : '9009002626'
    };
    res.json(contacts);
});

app.listen(port, () => {
    console.log(`Community Center server running at http://localhost:${port}`);
});

//ctrl+c to kill the server first to show recent updates we done after running the prot
//then again restrt the server