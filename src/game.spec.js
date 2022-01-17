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
 * On a mis une seed au générateur de nombres aléatoires (rng)
 *
 * Extraire le code mis à la racine à partir de la ligne 178
 *
 * Faire des scenari avec des nombres de joueurs différents pour atteindre 100% de couverture de test
 *
 * Trouver un moyen de vérifier que comportement n'a pas changé (=> automatiser les asserts)
 */
describe("Your specs...", function () {
  // it ...
});
