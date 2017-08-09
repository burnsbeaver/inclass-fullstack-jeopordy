var mongoose = require('mongoose');
var Schema = mongoose.Schema

mongoose.Promise = global.Promise;

var QuestionSchema = new Schema({
  question: String,
  answer: String,
  value: Number
});

var CategorySchema = new Schema({
  name: String,
  questions: [QuestionSchema]
});

var GameSchema = new Schema({
  user: String,
  points: Number,
  board: [Boolean],
  categories: [CategorySchema]
});

GameSchema.pre('save', function(next){
  const emptyBoard = [
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false
  ];
  this.board = emptyBoard;
  next();
})

var Question = mongoose.model("Question", QuestionSchema);
var Category = mongoose.model("Category", CategorySchema);
var Game = mongoose.model("Game", GameSchema);

module.exports = {
  Question, Category, Game,
};
