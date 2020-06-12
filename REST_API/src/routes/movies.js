const { Router  } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

//routes
router.get('/', (req, res) => {
    res.json(movies);
} );

router.post('/', (req, res) => {

    const { title, director, year, rating } = req.body;  
    console.log("body"+title+" "+director+" "+year+" "+rating);
    if ( title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = { ...req.body, id };
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }

});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movies.splice(i, 1);
            }
        });
        res.json(movies);
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (id && title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id === id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

module.exports = router;