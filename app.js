const express = require('express'); // express
const logger = require('morgan');  // logger
const path = require('path'); // for static resources
// add custom Router
const homeRouter = require('./routes/homeRouter');
const articleRouter = require('./routes/articleRouter');
//const schemas = require('./schemas/index');  // if js name was 'index.js' then be able to hide.
const connect = require('./schemas');
const app = express();

// connect mongo database
connect();

// add view with handlebar
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

// set middle ware.
app.use(logger('dev')); // add logger with morgan
app.use('/static', express.static(path.join(__dirname,'public'))); // /static req to see public folder resources

// body-parser is added at 4.16 Express version.
app.use(express.json());
app.use(express.urlencoded({extended:false}));


/* using outter routers..
// set route urls
// get
app.get('/', function (req,res) {
    res.send('get send.');
});
// get with json
app.get('/json', function (req,res) {
    res.json({
        title : 'new title',
        author : 'kim'
    });
});
// post
app.post('/', function(req,res){
    res.send('post send.');
});
*/

// routes using Router()
app.use('/', homeRouter); // root url router.
app.use('/articles', articleRouter); // article router.

// set error at last
app.use((req, res, next) =>{
    res.send('404 Not found');
});

// server start
app.listen(3030, ()=>{
    console.log('server ready...');
});
