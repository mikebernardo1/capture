// initialize Express in project
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

const movieDetailsRoute = require('./routes/movieDetailsRoute');

app.use('/movieDetails', movieDetailsRoute);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

// start Express on port 5000
app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
    console.log('Press CTRL + C to stop server');
    })