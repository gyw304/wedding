MyGame.s4 = function(game) {

};

var my;
MyGame.s4.prototype = {
    create: function() {
        my = this;
        this.bg4 = this.add.image(0,0,'bg3');

        this.arc2 = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 200,'arc2');
        this.arc2.anchor.set(0.5,1)




        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);

        document.getElementById('upfile').style.display = 'block';

        document.getElementById('fileInput').onchange = function(evt) {

            // 如果浏览器不支持FileReader，则不处理

            if (!window.FileReader) return;

            var files = evt.target.files;

            for (var i = 0, f; f = files[i]; i++) {

                if (!f.type.match('image.*')) {

                    continue;

                }


                var reader = new FileReader();

                reader.onload = (function(theFile) {

                    return function(e) {

                        // img 元素

                        document.getElementById('myHeaders').src = e.target.result;

                        my.showNextButton();

                    };

                })(f);


                reader.readAsDataURL(f);

            }

        }



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
        document.getElementById('upfile').style.display = 'none';
        this.state.start('s5');
    }
};

