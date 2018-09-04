const assert = require('assert');
const Card = require('../card.js');

let card;
let card2;

beforeEach( function(){
  card = new Card('Superman', 6, 9, 7);
  card2 = new Card('Scarlet Witch', 7, 10, 5);
});
