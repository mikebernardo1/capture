// initialize Express in project
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');

const movies = require('../data/data.json');

app.use(cors());
app.use(express.json());

router
.get('/', (req, res) => {
    return res.send(movies);
    })

router
.get('/:id', (req, res) => {
let moviesID = movies.find((movie)=> movie.id == req.params.id);
return res.send(moviesID);
})

module.exports = router;