MyGame.lotto = function(game) {

};
MyGame.lotto.prototype = {
    create: function() {
        this.add.image(0,0,'lotto');

        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },2500,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                this.hert_json = this.add.sprite(MyGame.GAME_WIDTH/2,170, 'hert_json');
                this.hert_json.anchor.set(0.5);
                this.hert_json.animations.add('hert_json');
                this.hert_json.animations.play('hert_json',5,false);
            },this)
    }
};

