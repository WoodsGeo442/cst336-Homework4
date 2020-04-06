var  express =require('express');
var app = express();
var date = new Date();
app.use(express.static('css'));
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home.html");
});

app.get('/home', function(req, res) {
    res.render("home.html")
});

app.get('/info1', function(req, res) {
    console.log("The current day is " + date.getDate());
    res.render("info1.html")
});

app.get('/info2', function(req, res) {
    res.render("info2.html")
});

app.get('/info3', function(req, res) {
    res.render("info3.html")
});

app.get("*", function(req, res){
   res.render("error.html"); 
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
});