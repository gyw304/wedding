MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    preload: function() {

        this.stage.backgroundColor = '#ffffff'

    },

    start : function(){
        this.load.image('blink','assets/blink.png');

        this.load.image('bg', 'assets/bg.jpg');
        this.load.image('door-left', 'assets/door-left.png?3');
        this.load.image('door-right', 'assets/door-right.png?1');

        this.load.spritesheet('snowflakes', 'assets/huaban.png?1', 150, 150);
        this.load.image('qiu', 'assets/qiubite.png?1');
        this.load.image('mache', 'assets/mache.png');

        this.load.image('bg2', 'assets/bg2.jpg');
        this.load.image('boy', 'assets/boy.png');
        this.load.image('girl', 'assets/girl.png');
        this.load.image('title','assets/title.png');
        this.load.image('start-button','assets/start-button.png');
        this.load.image('yizi','assets/yizi.png');

        this.load.image('bg3','assets/bg3.jpg');
        this.load.image('h_boy','assets/h_boy.png');
        this.load.image('h_girl','assets/h_girl.png');

        this.load.image('s_boy','assets/s_boy.png');
        this.load.image('s_girl','assets/s_girl.png');
        this.load.image('arc','assets/arc.png');

        this.load.image('arc2','assets/arc2.png?1');
        this.load.image('arc3','assets/arc3.png?1');

        this.load.image('bg4','assets/bg4.jpg');
        this.load.image('zhuozi','assets/zhuozi.png');
        this.load.image('girl_arc','assets/girl_arc.png');
        this.load.image('boy_arc','assets/boy_arc.png');
        this.load.image('hxm','assets/hxm.png');
        this.load.image('bb','assets/bb.png');
        this.load.image('heart','assets/heart.png');

        this.load.image('z_b_1','assets/z_b_1.png');
        this.load.image('z_b_2','assets/z_b_2.png');
        this.load.image('z_b_3','assets/z_b_3.png');
        this.load.image('z_b_4','assets/z_b_4.png');
        this.load.image('z_b_5','assets/z_b_5.png');

        this.load.image('z_g_1','assets/z_g_1.png');
        this.load.image('z_g_2','assets/z_g_2.png');
        this.load.image('z_g_3','assets/z_g_3.png');
        this.load.image('z_g_4','assets/z_g_4.png');
        this.load.image('z_g_5','assets/z_g_5.png');
        this.load.image('noLotto-boy','assets/noLotto-boy.jpg');
        this.load.image('noLotto-girl','assets/noLotto-girl.jpg');

        this.load.image('lotto','assets/lotto.jpg?1')

        this.load.atlasJSONHash('hert_json', 'assets/hert_json.png?10', 'assets/hert_json.json?11');

        this.load.start();
    },

    fileComplete : function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete : function(){
        this.state.start('s4');
    },
    create: function() {
        this.start();
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2, '', { fill: '#000000' });
        this.text.anchor.set(0.5);
    }


    /*create: function() {
        this.state.start('s1');
    }*/
};