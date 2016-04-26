/// <reference path="phaser/phaser.d.ts"/>

module joc {
    export class menuState extends Phaser.State {

        introText:Phaser.Text;
        cursor:Phaser.CursorKeys;

        create():void {
            super.create();

            this.add.sprite(0, 0, 'fons');

            this.introText = this.game.add.text(this.world.centerX, this.world.centerY, 'Agafa Canyes\nPresiona Enter',{font: '40px Arial', fill: '#ffffff'});
            this.introText.anchor.setTo(0.5, 0.5);

            this.cursor = this.game.input.keyboard.createCursorKeys();

        }


        update():void {
            super.update();
            if(this.input.keyboard.isDown(Phaser.KeyCode.ENTER)) {
                this.game.state.start("game");
            }

        }

    }


}