const express = require('express');
const router = express.Router();
const Article = require('../schemas/article');

/* need apis
/articles [get]
/articles [post]
/articles/:num [get]
/articles/:num [put]
/articles/:num [delete]
*/

// using async, await
// get list of articles
router.get('/', async (req,res) => {
    try{
        const articles = await Article.find({});
        res.json(articles);
    }catch(err){
        res.send('get articles error. ',err);
    }
});

// create article
/*
{
    "_id" : 1,
    "title" : "hello title",
    "author" : "choi",
    "content" : "hello content"
}
*/
router.post('/', async (req,res) => {
    const article = new Article(req.body);
    try{
        const result = await article.save();
        res.json(result);
    }catch(err){
        res.send('create articles error. ',err);
    }
});
// get article
router.get('/:num', async (req,res) => {
    try{
        const article = await Article.find({_id : req.params.num});
        res.json(article);
    }catch(err){
        res.send('get one article error.',err);
    }
});
// update article
router.put('/:num', async (req,res) => {
    try{
        const result = await Article.update({_id : req.params.num},{
            content : req.body.content,
            title : req.body.title
        });
        res.json(result);
    }catch(err){
        res.send('update article error',err);
    }
});
// delete article
router.delete('/:num', async (req,res) => {
    try{
        const result = await Article.remove({_id: req.params.num});
        res.json(result);
    }catch(err) {
        res.send('delete article error',err);
    }
});

/*
// using fat arrow
// using json respose
// get list of articles
router.get('/', (req,res) => {
    //res.send('get articles');
    res.json({
        result : 'get articles'
    });
});
// create article
router.post('/', (req,res) => {
    res.send('create article');
});
// get article
router.get('/:num', (req,res) => {
    res.send('select article ' + req.params.num);
});
// update article
router.put('/:num', (req,res) => {
    res.send('update article ' + req.params.num);
});
// delete article
router.delete('/:num', (req,res) => {
    res.send('delete article ' + req.params.num);
});
*/

/*
// get list of articles
router.get('/', function (req,res) {
    res.send('get articles');
});
// create article
router.post('/', function (req,res) {
    res.send('create article');
});
// get article
router.get('/:num', function (req,res) {
    res.send('select article ' + req.params.num);
});
// update article
router.put('/:num', function (req,res) {
    res.send('update article ' + req.params.num);
});
// delete article
router.delete('/:num', function (req,res) {
    res.send('delete article ' + req.params.num);
});
*/



module.exports = router;
