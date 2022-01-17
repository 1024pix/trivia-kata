const Should = require('should');
const Game = require('./game.js');

describe("The test environment", function () {
  it("should pass", function () {
    (true).should.equal(true);
  });

  it("should access game", function () {
    Should(Game).not.equal(undefined);
  });
});

/**
 * On veut rendre l'exécution déterministe (toujours la même à chaque fois).
 * Pour faire ça on veut figer le random
 *
 * Une séquence connue, loop de 1 à 6
 *
 * générer un grand tableau avec plein de random dedans dans un json et
 * parcourir le tableau au lieu de faire du random
 *
 * Mettre une seed au générateur de nombres aléatoires (rng)
 */
describe("Your specs...", function () {
  // it ...
});
