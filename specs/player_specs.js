const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

let player1;
let player2;
let card1;
let card2;

beforeEach( function(){
  player1 = new Player('Player1');
  player2 = new Player('Player2');
  card1 = new Card('Superman', 6, 9, 7);
  card2 = new Card('Scarlet Witch', 7, 10, 5);
});


describe("Player", function(){
  it("should have a name", function(){
    const actual = player1.name;
    assert.strictEqual(actual, 'Player1');
  });

  it("should have a hand", function(){
    const actual = player1.hand;
    assert.deepStrictEqual(actual, [] );
  });

  it("should have addCard", function(){
    player1.addCard(card1);
    const actual = player1.hand;
    assert.deepStrictEqual(actual, [card1] );
  });

});
