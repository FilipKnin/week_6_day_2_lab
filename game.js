const Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.deck = [];
};

// Game.prototype.removeCard = function () {
//   this.deck.shift()
// };

Game.prototype.addCardToDeck = function (card) {
  this.deck.push(card)
};





module.exports = Game;
