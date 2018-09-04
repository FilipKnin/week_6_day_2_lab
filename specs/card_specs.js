const assert = require('assert');
const Card = require('../card.js');

let card1;
let card2;

beforeEach( function(){
  card1 = new Card('Superman', 6, 9, 7);
  card2 = new Card('Scarlet Witch', 7, 10, 5);
});

describe("Card", function(){
  it("should have a name", function(){
    const actual = card1.name;
    assert.strictEqual(actual, 'Superman');
  });

  it("should have an intelligence", function(){
    const actual = card1.intelligence;
    assert.strictEqual(actual, 6);
  });

  it("should have an strength", function(){
    const actual = card1.strength;
    assert.strictEqual(actual, 9);
  });

  it("should have an agility", function(){
    const actual = card1.agility;
    assert.strictEqual(actual, 7);
  });
});
