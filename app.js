const express = require('express');

const app = express();

const port = 3001;

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.json({"key": "value"});
})

app.get('/api/:id', (req, res, next) => {
    try {
        res.send(`${req.params.id}, ${req.query.toString()}`)
    } catch(e) {
        next()
    }
});

app.use((err, req, res, next) => {
    console.error(err, req);
    next();
})

app.listen(port, () => {
    console.log(`App listening on ${port}`);
})
