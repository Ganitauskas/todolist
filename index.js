var express     =   require("express"),
    mongoose    =   require("mongoose"),
    port        =   process.env.PORT || 3000,
    app         =   express();
    
app.get('/', function(req, res){
    res.json({
        message: "Hi from js object"
    });
});
    
app.listen(port, function(){
    console.log('App is running on port: ' + process.env.PORT);
});