// Imports
const express = require('express');
const mongoose = require('mongoose');
const webRoutes = require('./routes/web');
const keys = require('./configs/keys');

require('./models/shows');
require('./utils/redis');
//CAMBIOSSSSS

// Express app creation
const app = express();

// Configurations
const appConfig = require('./configs/app');



// app.use(bodyParser.json());

// Mongoose
mongoose.connect(keys.MONGO_URI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Receive parameters from the Form requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', webRoutes);

// Configuraciones para el view engine
let exphbs = require('express-handlebars');
// Imports a set of helpers for handlebars
// https://github.com/helpers/handlebars-helpers
let hbshelpers = require("handlebars-helpers");
let multihelpers = hbshelpers();
const extNameHbs = 'hbs';
let hbs = exphbs.create({
  extname: extNameHbs,
  helpers: multihelpers
});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);


// App init
app.listen(3000, () => {
  console.log(`Server is listenning on -> ${appConfig.express_port}! (http://localhost:${appConfig.express_port})`);
});

