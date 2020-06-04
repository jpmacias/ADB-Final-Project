const router = require('express').Router();
const pagesController = require('../controllers/PagesController');
const mongoose = require('mongoose');
//POR SI FALLA
const Show = mongoose.model('shows');

router.get('/', pagesController.homepage);
router.get('/type', pagesController.showByType);
router.get('/title', pagesController.showByTitle);
router.get('/director', pagesController.showByDirector);
router.get('/cast', pagesController.showByCast);
router.get('/country', pagesController.showByCountry);
router.get('/year', pagesController.showByYear);
router.get('/rating', pagesController.showByRating);
router.get('/duration', pagesController.showByDuration);
router.get('/genre', pagesController.showByGenre);
router.get('/description', pagesController.showByDesc);
router.get('/numActor', pagesController.numActor);
router.get('/liShows', pagesController.liShows);
router.get('/releaseYear', pagesController.releaseYear);
router.post('/add-show', pagesController.addOne);

module.exports = router;
