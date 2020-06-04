let mongoose = require('mongoose');
const {Schema} = mongoose;

let showsSchema = new Schema({
    id: { type: Number },
    type: { type: String},
    title: { type: String },
    director: { type: String },
    cast: { type: String },
    country: { type: String },
    date_added: { type: Date },
    release_year: { type: String },
    rating: { type: String },
    duration: { type: String },
    listed_in: { type: String },
    description: { type: String }
});

let Show = mongoose.model('shows', showsSchema);

module.exports = Show;