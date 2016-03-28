MyGame.noLotto_boy = function(game) {

};
MyGame.noLotto_boy.prototype = {
    create: function() {
        this.add.image(0,0,'noLotto-boy');
        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);
    }
};

