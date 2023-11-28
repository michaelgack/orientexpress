const express = require('express');

const app = express();

const port = 3001;

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.json({"key": "value"});
})

app.get('/screenshot/:name', (req, res, next) => {
    try {
        res.send(`<img src="/images/mobile/${req.params.name}.png" width=1028 alt="playwright screenshot">`)
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
