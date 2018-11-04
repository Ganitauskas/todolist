var express     =   require("express"),
    mongoose    =   require("mongoose"),
    app         =   express();
    
app.get('/', function(req, res){
    
});
    
app.listen(process.env.PORT, function(){
    console.log('App is running on port: ' + process.env.PORT);
});