const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3001;
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
 
app.get('/',  (req, res)=> {
    res.render('home');
});

app.get('/fr', (req, res)=> {
    res.render('france');
});
 
app.listen(port, ()=>{
    console.log('it just started' + port)
});

