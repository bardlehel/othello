//game.js
//author: Lehel Kovach
//date: 7/5/2015
/*
    This angular service encapsulates the game logic. I decided to put the game logic on the client side
    as an angular service for the reason that:  its better to offload processing to the client when possible and
    since there was no reason to make the game so secure, there was no need to put the game logic in the server.

    Since the spec called for using angularjs and to demonstrate my knowledge of angular, I decided to organize my code
    by putting the game logic steps into an angular service in order to modularize the code and chose an angular service
    also because the application only runs one game at a time; thus, the game logic 'object' would be best placed inside a singleton.

    The service is broken into a set of operations (functions) that was borrowed from an online source to organize the othello game logic

    This particular game was built with 1 player who starts (is black) and a computer opponent that uses an algorithm to decide on the best move.
 */


(function() {
    'use strict';

    angular
        .module('othello')
        .service('Game', function (GameData, AI) {

            var moveNumber;
            var turn;

            this.startGame = function () {

                //tell the server to set the game data to initial values

                // set game variables to initial values
                moveNumber = 1;
                turn = 1; //player 1

                //set the UI to game start state

                // Initialize the board.
                this.board.SetForNewGame();
                this.UpdateBoardDisplay();


                //call this after this function is called in game loop
                //this.StartTurn();

                return 'running';
            };

            this.endGame = function () {
                return null;
            };

            this.startTurn = function () {
                return null;
            };

            this.getComputerMove = function () {
                return null;
            };

            this.makePlayerMove = function () {
                return null;
            };

            this.makeComputerMove  = function () {
                return null;
            };

            this.makeMove  = function () {
                return null;
            };

            this.endMove  = function () {
                return null;
            };


        });

})();
