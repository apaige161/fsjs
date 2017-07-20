//server setup
//not wired up, not sure if I want to use this or another way
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
 
 //need to create these files/folders
const index = require('./routes/index');
const todos = require('./routes/saws');
 
const app = express();
 
/**** view engine setup *****/
//set path
app.set('views', path.join(__dirname, 'views')); //should this be?? app.set('views', path.join(__dirname, 'app')); 
//specify engine
app.set('view engine', 'ejs');
//render files with an html extention
app.engine('html', require('ejs').renderFile);

/***** set static folder ******/
//server is running and path.join concatinates the root to views
    //serves up the angular front end
app.use(express.static(path.join(__dirname, './public')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

/***** body parser middleware ******/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

/***** route ******/
app.use('/', index);
app.use('/api', todos);

/***** start server ******/
const server = app.listen(3000, function() {
     console.log('server is running on port 3000')
 })

