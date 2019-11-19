// The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "guessLetter",
      message: "Guess a letter!"
    }
  ])
  .then(function(answers){
    // Use user feedback for... whatever!!
  });
// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
function Letter(value) {
  //   * A string value to store the underlying character for the letter
  this.value = value;
  //   * A boolean value that stores whether that letter has been guessed yet
  this.guessed = false;
  //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  this.guessRightOrNot = function () {
    if (this.guessed === true) {
      return this.value
    } else {
      return "_"
    }
  };
  //   * A function that takes a letter as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.guess = function (letter) {
    if (letter === this.value) {
      console.log("correct!");
      this.guessed = true;
    }
  }
};

// var letter1 = new Letter("c");
// console.log(letter1);
// letter1.guess("c");

module.exports = Letter;