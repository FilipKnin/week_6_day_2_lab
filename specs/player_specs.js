const assert = require('assert');
const Player = require('../player.js');

let player1;
let player2;

beforeEach( function(){
  player1 = new Player('Player1');
  player2 = new Player('Player2');
});
