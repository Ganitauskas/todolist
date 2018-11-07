var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/todo-api');

// allow to use Promise syntax
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');