const express = require('express'); // express
const logger = require('morgan');  // logger
const app = express();


// set middle ware.
app.use(logger('dev')); // add logger
app.use(express.json());
app.use(express.urlencoded({extended:false}));

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

// set error at last
app.use((req, res, next) =>{
    res.send('404 Not found');
});

// server start
app.listen(3030, ()=>{
    console.log('server ready...');
});
