MyGame.s2 = function(game) {

};


MyGame.s2.prototype = {
    create: function() {
        this.bg2 = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2,'bg2');
        this.bg2.anchor.set(0.5);

        this.boy = this.add.image(320,630,'boy');
        this.boy.alpha = 0;
        this.boy.anchor.set(1,1);
        this.boy.scale.x = 0.7;
        this.boy.scale.y = 0.7;

        this.girl = this.add.image(300,630,'girl');
        this.girl.alpha = 0;
        this.girl.anchor.set(0,1);
        this.girl.scale.x = 0.7;
        this.girl.scale.y = 0.7;

        this.title = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2 - 250,'title');
        this.title.anchor.set(0.5);
        this.title.alpha = 0;

        this.startButton = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2 - 90,'start-button');
        this.startButton.anchor.set(0.5);
        this.startButton.alpha = 0;



        this.add.tween(this.bg2.scale).from({x: 4, y: 4}, 5000, Phaser.Easing.Cubic.Out, true).onComplete.add(function(){

            this.add.tween(this.boy).to({y:690,alpha:1}, 3500, Phaser.Easing.Cubic.Out, true);
            this.add.tween(this.boy.scale).to({x:1,y:1}, 3500, Phaser.Easing.Cubic.Out, true);
            this.add.tween(this.girl).to({y:690,x:290,alpha:1}, 3500, Phaser.Easing.Cubic.Out, true);
            this.add.tween(this.girl.scale).to({x:1,y:1},3500, Phaser.Easing.Cubic.Out, true);


            this.add.tween(this.title).to({alpha:1}, 3500, Phaser.Easing.Cubic.Out, true,1000).onComplete.add(function(){
                this.showNextButton()
            },this)

            this.add.tween(this.startButton).to({alpha:1}, 3500, Phaser.Easing.Cubic.Out, true,1500)

         },this);


        front_emitter = this.add.emitter(this.world.centerX, -32, 50);
        front_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5, 6]);
        front_emitter.maxParticleScale = 1;
        front_emitter.minParticleScale = 0.5;
        front_emitter.setYSpeed(100, 200);
        front_emitter.gravity = 0;
        front_emitter.width = this.world.width * 1.5;
        front_emitter.minRotation = 0;
        front_emitter.maxRotation = 40;
        this.changeWindDirection();
        front_emitter.start(start, 10000, 1000);

        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);

    },
    update: function() {
        i++;
        if (i === update_interval)
        {
            this.changeWindDirection();
            update_interval = Math.floor(Math.random() * 20) * 60; // 0 - 20sec @ 60fps
            i = 0;
        }
    },
    changeWindDirection : function(){
        var multi = Math.floor((max + 200) / 4),
            frag = (Math.floor(Math.random() * 100) - multi);
        max = max + frag;

        if (max > 200) max = 150;
        if (max < -200) max = -150;

        this.setXSpeed(front_emitter, max);
    },
    setXSpeed : function(emitter, max){
        emitter.setXSpeed(max - 20, max);
        emitter.forEachAlive(this.setParticleXSpeed, this, max);
    },
    setParticleXSpeed : function(particle, max){
        particle.body.velocity.x = max - Math.floor(Math.random() * 30);
    },
    showNextButton : function(){
        this.yizi = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 80,'yizi');
        this.yizi.anchor.set(0.5);
        this.yizi.inputEnabled = true;
        this.yizi.events.onInputDown.add(this.next, this);
        this.add.tween(this.yizi).from({alpha:0}, 500, Phaser.Easing.Cubic.Out, true);
        this.add.tween(this.yizi.scale).to({x:1.2,y:1.2}, 500, Phaser.Easing.Cubic.Out, true,0,-1,true);
    },
    next : function(){
        this.state.start('s3');
    }
};

