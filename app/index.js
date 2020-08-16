const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view-engine', 'ejs');
app.use('/public', express.static('public')); 

app.get('/', function (req, res) {
    res.setHeader('Content-type', 'text/html;charset=UTF-8');
    res.end('Accueil');
})
    .get('/accueil', function(req,res){
        res.setHeader('Content-type','text/html;charset=UTF-8');
        res.render('index.ejs');
    })
    
    .get('/parite-de-:num', function(req,res){
        res.setHeader('Content-type', 'text/html;chartset=UTF-8');
        res.render('parite.ejs', {numero:req.params.num});
        console.log(req.params.num);
    })
    .get('/:nb1-fois-:nb2', function(req,res){
        res.setHeader('Content-type', 'text/html;chartset=UTF-8');
        res.render('table.ejs', {lignes:req.params.nb1,colonnes:req.params.nb2})
    })

    .use('/', function (req, res, next) {
        res.setHeader('Content-type', 'text/html;chartset=UTF-8');
        res.status(404).send('Page introuvable')
    })
    .listen(port, () => {
        console.log('Server is running on port: ' + `${port}`)
    })

