MyGame.MainMenu = function(game) {};
MyGame.MainMenu.prototype = {
    create: function() {
        this.stage.backgroundColor = '#dedede';
        //this.add.button(0, 0,'button-rest', this.startGame, this);
    },
    startGame: function() {
        this.state.start('Game');
    }
};