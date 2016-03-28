MyGame.s3 = function(game) {

};
var seletNum = 0;//0ÄÐ 1Å®
var ss;
MyGame.s3.prototype = {
    create: function() {

        ss = this;

        this.bg3 = this.add.image(0,0,'bg3');

        this.h_boy = this.add.image(100,250,'h_boy');
        this.h_girl = this.add.image(350,250,'h_girl');

        this.s_boy = this.add.image(60,500,'s_boy');
        this.s_boy.inputEnabled = true;
        this.s_boy.events.onInputDown.add(this.selectBoy, this);
        this.s_girl = this.add.image(335,500,'s_girl');
        this.s_girl.inputEnabled = true;
        this.s_girl.events.onInputDown.add(this.selectGirl, this);

        this.zhizhen = this.add.image(this.h_boy.x + 100,this.h_boy.y+150,'qiu');

        this.arc3 = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 300,'arc3');
        this.arc3.anchor.set(0.5,1)

        this.showNextButton();

        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);


    },
    update: function() {

    },
    showNextButton : function(){
        this.yizi = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 80,'yizi');
        this.yizi.anchor.set(0.5);
        this.yizi.inputEnabled = true;
        this.yizi.events.onInputDown.add(this.showbaoming, this);
        this.add.tween(this.yizi).from({alpha:0}, 500, Phaser.Easing.Cubic.Out, true);
        this.add.tween(this.yizi.scale).to({x:1.2,y:1.2}, 500, Phaser.Easing.Cubic.Out, true,0,-1,true);
    },
    selectBoy: function(){
        seletNum = 0;
        this.add.tween(this.zhizhen).to({x:this.h_boy.x + 100}, 500, Phaser.Easing.Cubic.Out, true);
    },
    selectGirl : function(){
        seletNum = 1;
        this.add.tween(this.zhizhen).to({x:this.h_girl.x + 100}, 500, Phaser.Easing.Cubic.Out, true);
    },
    showbaoming : function(){

        if(seletNum)
        {
            document.getElementById('sexHeader').src = 'assets/h_girl.png'
        }
        else
        {
            document.getElementById('sexHeader').src = 'assets/h_boy.png'
        }


        $('#baomingPage').fadeIn(1000);
        document.getElementById('sub-btn').addEventListener('touchend',function(){
            document.getElementById('baomingPage').style.display = 'none';
            ss.state.start('s4');
        },false)
        //document.getElementById('form').style.display = 'none';
        //this.state.start('s4');
    }
};

