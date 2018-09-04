const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');

let game;
let player1;
let player2;
let card1;
let card2;

beforeEach( function(){
  game = new Game(player1, player2);
  player1 = new Player('Player1');
  player2 = new Player('Player2');
  card1 = new Card('Superman', 6, 9, 7);
  card2 = new Card('Scarlet Witch', 7, 10, 5);
});
