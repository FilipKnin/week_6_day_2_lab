const assert = require('assert');
const Player = require('../player.js');

let player1;
let player2;

beforeEach( function(){
  player1 = new Player('Player1');
  player2 = new Player('Player2');
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

});
