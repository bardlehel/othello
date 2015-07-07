'use strict';


describe('Game service test', function() {

    var game;
    var mockGameData;
    var mockAI;

    beforeEach(module("othello"));

    beforeEach(function() {
        mockGameData = {
            getGameState : function() {
                return 'running';
            }
        };

        mockAI = {
            getBestMove : function() {
                return null;
            }
        };

        module(function($provide) {
            $provide.value('GameData', mockGameData);
        });

        module(function($provide) {
            $provide.value('AI', mockGameData);
        });

        inject(function(Game) {
            game = Game;
        });
    });

    describe('Game#startGame', function () {

        it('should return json containing game state equalling running', function () {
            var state = game.startGame();
            assert.equal(state, 'running');
        });



    })

})