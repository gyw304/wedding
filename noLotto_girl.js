MyGame.noLotto_girl = function(game) {

};
MyGame.noLotto_girl.prototype = {
    create: function() {
        this.add.image(0,0,'noLotto-girl');
        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);
    }
};

