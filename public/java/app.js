var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

  $scope.information = [
  {
    src: "./images/openfridge-BW.jpeg",
    srcb: "./images/openfridge.jpeg",
    dataname: "Open Fridge",
    datalink: "https://open-fridge.herokuapp.com/",
    alt: "Open Fridge App",
    text: "Open Fridge helps keep track of what's is in your refridgerator & finds recipies with the ingredients on hand.",
    datalinkname: 'Open Fridge',
    info: 'This app was a group project. I coded the HTML/JS/jQuery for the accordian, modal, and wrote the JavaScript/jQuery that allows the page to select/delete an item in one section and have it appear/disapear in another. I also made it usable on any device.',
    color: "background : #66ff66;",
    fawe: "fa fa-cutlery"
  },

  {
   src: "./images/flashcard-BW.jpeg",
   srcb: "./images/flashcard.jpeg",
   dataname: "Flashcard Machine",
   datalink: "https://flashcard-dryguy.herokuapp.com/",
   alt: "Flashcard Machine",
   text: "I designed this app to create flashcards to use as a study tool.",
   datalinkname: 'Flashcard Machine',
   info: "This app is built as a study helper.  I wrote the NodeJS server for this app and wrote the scheema and routes for the MySQL database running on the back end.  I intend to setup a login in the future to make the cards more useful and personal.",
   color: "background : #cc33ff;",
   fawe: 'fa fa-trophy'
   },

   {
     src: "./images/trivia-BW.jpeg",
     srcb: "./images/trivia.jpeg",
     dataname: "Music Trivia",
     datalink: 'https://trivia-dryguy.herokuapp.com/',
     alt: "Music Trivia App",
     text: "I designed to set timers to control gameplay. Once started, Gameplay continues until time expires.",
     datalinkname: 'Music Trivia',
     info: "This app is a fun game I built to show off timers and music effects.  It is built with HTML, Javascript, jQuery, Bootstrap & CSS.",
     color: "background : #00ffff;",
     fawe: 'fa fa-music'
   },

  {
   src: "./images/rpsls-BW.jpeg",
   srcb: "./images/rpsls.jpeg",
   dataname: 'R P S L S',
   datalink: 'https://rpsls-dryguy.herokuapp.com/',
   alt: "Rock, Paper, Scissors, Lizard, Spock app",
   text: "",
   datalinkname: 'Rock, Paper, Scissors, Lizard, Spock',
   info: "I built this game because I was told I couldn't do it.  It makes good use of Firebase for login and gameplay.  I built it with Javascript, jQuery, AJAX, HTML, CSS & Bootstrap.",
   color: "background : #ff9933;",
   fawe: 'fa fa-hand-spock-o'
  },

  {
   src: "./images/hangman-BW.jpeg",
   srcb: "./images/hangman.jpeg",
   dataname: 'Hangman',
   datalink: "https://hangman-dryguy.herokuapp.com/",
   alt: "Hangman",
   text: "I designed this app as a fun, interactive game that may be played on almost any device.",
   datalinkname: 'Hangman',
   info: "I built this web app for my daughters to play on their phones.  I used Adobe Illustrator to customize the graphics.  Bootstrap makes it scaleable.  Javascript/jQuery provide the logic to display the game.",
   color: "background : #ffff00;",
   fawe: 'fa fa-film'
 },

 {
   src: "./images/giphy-BW.jpeg",
   srcb: "./images/giphy.jpeg",
   dataname: "Giphy's",
   datalink: "https://giphy-dryguy.herokuapp.com/",
   alt: "Find moving images app",
   text: "I used jQuery and AJAX to create a fun movie app.",
   datalinkname: "Find Movie Giphy's",
   info: "I built this app to access the Giphy Rest API quickly in a clean, searchable interface.",
   color: "background : #ff0000;",
   fawe: 'fa fa-picture-o'
 }

];

});
