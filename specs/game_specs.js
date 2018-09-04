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
  player1 = new Player('John');
  player2 = new Player('Chris');
  card1 = new Card('Superman', 6, 9, 7);
  card2 = new Card('Scarlet Witch', 7, 10, 5);
});


describe("Player", function(){
  it("should have a player1", function(){
    const actual = game.player1.name;
    assert.strictEqual(actual, 'John');
  });


  it("should have a player2", function(){
    const actual = game.player2.name;
    assert.strictEqual(actual, 'Chris');
  });

  it("should have a deck", function(){
    const actual = game.deck;
    assert.deepStrictEqual(actual, []);
  });


});
