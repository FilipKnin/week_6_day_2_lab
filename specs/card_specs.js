const assert = require('assert');
const Card = require('../card.js');

let card1;
let card2;

beforeEach( function(){
  card1 = new Card('Superman', 6, 9, 7);
  card2 = new Card('Scarlet Witch', 7, 10, 5);
});

describe("Taxi", function(){
  it("should have a name", function(){

    const actual = card1.name;

    assert.strictEqual(actual, 'Superman');
  });

});
