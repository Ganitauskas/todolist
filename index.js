var express     =   require('express'),
    mongoose    =   require('mongoose'),
    port        =   process.env.PORT || 3000,
    app         =   express(),
    bodyParser  =   require('body-parser');
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
app.get('/', function(req, res){
    res.send('Hi from js object');
});

app.use('/api/todos', todoRoutes);
    
app.listen(port, function(){
    console.log('App is running on port: ' + process.env.PORT);
});