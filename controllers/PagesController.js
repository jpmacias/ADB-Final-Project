let Show = require('../models/shows');

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  // Definimos la vista a responder. Nota que se usa la función "render" y no "send".+
  res.render('pages/homepage');
}

exports.showByType = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByType = await Show.find({ 'type': regex }, { _id: 0 }).limit(50).cache({ time: 1440, key: 'type' });
  res.json(showsByType);
};

exports.showByTitle = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByTitle = await Show.find({ 'title': regex }, { _id: 0 }).cache({ time: 1440, key: 'title' });
  res.json(showsByTitle);
};

exports.showByDirector = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByDirector = await Show.find({ 'director': regex}).cache({ time: 1440, key: 'director' });
  res.json(showsByDirector);
};

exports.showByCast = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByCast = await Show.find({ 'cast': { $regex: regex } }).cache({ time: 1440, key: 'cast' });
  res.json(showsByCast);
};

exports.showByCountry = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByCountry = await Show.find({ 'country': { $regex: regex } }).cache({ time: 1440, key: 'country' });
  res.json(showsByCountry);
};

exports.showByYear = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByYear = await Show.find({ 'release_year': regex }).cache({ time: 1440, key: 'year' });
  res.json(showsByYear);
};

exports.showByRating = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByRating = await Show.find({ 'rating': regex }).cache({ time: 1440, key: 'rating' });
  res.json(showsByRating);
};

exports.showByDuration = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByDuration = await Show.find({ 'duration': regex }).cache({ time: 1440, key: 'duration' });
  res.json(showsByDuration);
};

exports.showByGenre = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByGenre = await Show.find({ 'listed_in': regex }).cache({ time: 1440, key: 'genre' });
  res.json(showsByGenre);
};

exports.showByDesc = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const showsByDesc = await Show.find({ 'description': regex }).cache({ time: 1440, key: 'showsByDesc' });
  res.json(showsByDesc);
};

//Num de shows por actor (RUSSELL CROE)
exports.numActor = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const numCast = await Show.find({ 'cast': { $regex: regex } }).countDocuments().cache({ time: 1440, key: 'numActor' });
  res.json(numCast);
};

//Num de show por LISTED_IN
exports.liShows = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const listed_inShows = await Show.find({ 'listed_in': regex }).countDocuments().cache({ time: 1440, key: 'numListedIn' });
  res.json(listed_inShows);
};

//Num de show por año
exports.releaseYear = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const releasedYear = await Show.find({ 'release_year': regex}).countDocuments().cache({ time: 1440, key: 'numReleaseYear' });
  res.json(releasedYear);
};

exports.addOne = async (req, res) => {
  var type = req.body.type;
  var title = req.body.title;
  var director = req.body.director;
  var cast = req.body.cast;
  var country = req.body.country;
  var release_year = req.body.year;
  var rating = req.body.rating;
  var duration = req.body.duration;
  var listed_in = req.body.genre;
  var description = req.body.description;
  var newShow = new Show({
    id: Math.floor(Math.random() * 100000000) + 85000000,
    type: type,
    title: title,
    director: director,
    cast: cast,
    country: country,
    date_added: new Date(),
    release_year: release_year,
    rating: rating,
    duration: duration,
    listed_in: listed_in,
    description: description
  });

  try{
    await newShow.save();
    console.log("Added " + newShow.title);
    res.send(newShow);
  } catch(err) {
    res.status(400).send(err);
  }

}

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


