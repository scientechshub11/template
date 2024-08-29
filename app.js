const express = require('express');
const app = express();
app.use(express.static('static'))
app.set('view engine', 'ejs');
const port = 8000;

app.listen(port, ()=>{
    console.log(`app listen to the port: ${port}`)
})

app.get('/index', (req, res)=>{
    res.render('index');
})
app.get('/news-left-sidebar', (req, res)=>{
    res.render('news-left-sidebar');
})
app.get('/news-right-sidebar', (req, res)=>{
    res.render('news-right-sidebar');
})
app.get('/news-single', (req, res)=>{
    res.render('news-single');
})
app.get('/contact', (req, res)=>{
    res.render('contact');
})
app.get('/addons-1', (req, res)=>{
    res.render('addons-1');
})
app.get('/addons-2', (req, res)=>{
    res.render('addons-2');
})
app.get('/addons-3', (req, res)=>{
    res.render('addons-3');
})
app.get('/project-all', (req, res)=>{
    res.render('project-all');
})
app.get('/service', (req, res)=>{
    res.render('service');
})
app.get('/service-single', (req, res)=>{
    res.render('service-single');
})
app.get('/about', (req, res)=>{
    res.render('about');
})
app.get('/team', (req, res)=>{
    res.render('team');
})
app.get('/faq', (req, res)=>{
    res.render('faq');
})
app.get('/gallery', (req, res)=>{
    res.render('gallery');
})
app.get('/pricing-table', (req, res)=>{
    res.render('pricing-table');
})
app.get('/index-2', (req, res)=>{
    res.render('index-2');
})
