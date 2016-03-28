MyGame.s5 = function(game) {

};
var self;

var islotto = 0 //0���н� 1�н�

MyGame.s5.prototype = {
    create: function() {
        self = this;
        this.add.image(0,0,'bg4');

        this.zhuozi = this.add.image(MyGame.GAME_WIDTH/2,250,'zhuozi');
        this.zhuozi.anchor.set(0.5,0);



        this.hxm = this.add.image(190,140,'hxm');
        this.bb = this.add.image(340,140,'bb');

        this.heart = this.add.image(MyGame.GAME_WIDTH/2+10,380,'heart');
        this.heart.anchor.set(0.5);
        this.add.tween(this.heart.scale).to({x:1.2,y:1.2}, 500, Phaser.Easing.Cubic.Out, true,0,-1,true);

        this.headerGroup = this.add.group();

        this.sq = this.add.image(MyGame.GAME_WIDTH/2,680,'qiu');
        this.sq.anchor.set(0.5,0);


        if(!seletNum)
        {
            this.girl_arc = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 70,'girl_arc');
            this.girl_arc.anchor.set(0.5,1);
            this.headerGroup.create(70,220,'z_g_1');
            this.headerGroup.create(510,220,'z_g_2');
            this.headerGroup.create(510,400,'z_g_3');
            this.headerGroup.create(340,520,'z_g_4');
            this.headerGroup.create(190,520,'z_g_5');

        }
        else
        {
            this.boy_arc = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 70,'boy_arc');
            this.boy_arc.anchor.set(0.5,1);

            this.headerGroup.create(70,220,'z_b_1');
            this.headerGroup.create(510,220,'z_b_2');
            this.headerGroup.create(510,400,'z_b_3');
            this.headerGroup.create(340,520,'z_b_4');
            this.headerGroup.create(190,520,'z_b_5');

        }
        this.headerGroup.setAll('inputEnabled', true);
        this.headerGroup.callAll('events.onInputDown.add', 'events.onInputDown', this.lotto);

        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);
        document.getElementById('myHeaderImg').src = document.getElementById('myHeaders').src;
        document.getElementById('myHeaderImg').style.display = 'block';
    },
    lotto : function(item){
        self.add.tween(self.sq).to({x:item.x+60,y:item.y+60}, 500, Phaser.Easing.Cubic.Out, true);
        self.headerGroup.setAll('inputEnabled', false);

        self.time.events.add(Phaser.Timer.SECOND * 2,function(){
            document.getElementById('myHeaderImg').style.display = 'none';

            if(islotto)
            {
                self.state.start('lotto');
            }
            else
            {
                if(!seletNum)
                {
                    self.state.start('noLotto_boy');
                }
                else
                {
                    self.state.start('noLotto_girl');
                }
            }
        }, this);

    }
};

