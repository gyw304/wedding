MyGame.s1 = function(game) {

};

var max = 0;
var front_emitter;
var update_interval = 4 * 60;
var i = 0;

var start = false;

MyGame.s1.prototype = {
    create: function() {
        this.add.image(0,0,'bg');

        this.mache = this.add.image(680+530,590,'mache');
        this.mache.anchor.set(1,0.5)

        this.doorLeft = this.add.image(-5,MyGame.GAME_HEIGHT+5,'door-left')
        this.doorLeft.anchor.set(0,1);
        this.doorRight = this.add.image(MyGame.GAME_WIDTH+5,MyGame.GAME_HEIGHT+5,'door-right')
        this.doorRight.anchor.set(1,1);

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

        this.qiubite = this.add.image(MyGame.GAME_WIDTH/2+20,MyGame.GAME_HEIGHT/2 + 90,'qiu');
        this.qiubite.anchor.set(0.5);
        this.add.tween(this.qiubite).to({x: MyGame.GAME_WIDTH/2+20 - 10,y:MyGame.GAME_HEIGHT/2 + 90 - 10}, 500, Phaser.Easing.Cubic.Out, true,0,-1,true);
        this.qiubite.inputEnabled = true;
        this.qiubite.events.onInputDown.add(this.doorOpen, this);

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
    doorOpen : function() {
        this.qiubite.kill();
        this.add.tween(this.doorLeft).to({x: -330}, 2000, Phaser.Easing.Cubic.Out, true);
        this.add.tween(this.doorRight).to({x: MyGame.GAME_WIDTH + 330}, 2000, Phaser.Easing.Cubic.Out, true);
        this.add.tween(this.mache.scale).from({x: .5, y: .5}, 5000, Phaser.Easing.Cubic.Out, true, 500);
        this.add.tween(this.mache).to({x: 680, y: 760}, 5000, Phaser.Easing.Cubic.Out, true, 500).onComplete.add(function(){
            this.state.start('s2');
        },this)
    }
};

