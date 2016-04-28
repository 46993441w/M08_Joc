/// <reference path="phaser/phaser.d.ts"/>

module joc {
    export class loadState extends Phaser.State {
        private progressBar:Phaser.Sprite;
        private carregant:Phaser.Text;

        preload():void {
            super.preload();

            this.stage.backgroundColor = "#124284";
            // Agregem un text de cargant
            this.carregant = this.add.text(this.world.centerX, 150, 'carregant...',
                {font: '40px Arial', fill: '#ff0044'});
            this.carregant.anchor.setTo(0.5, 0.5);

            // Mostrem la barra de proces
            this.progressBar = this.add.sprite(this.world.centerX, 200, 'progressBar');
            this.progressBar.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.progressBar);

            // Precarguem els sprites
            this.load.image('jugador', 'assets/nen_front.png');
            this.load.image('jugador_dreta', 'assets/nen_dreta.png');
            this.load.image('jugador_esquerra', 'assets/nen_esquerra.png');
            this.load.image('birra', 'assets/cerveza1.png');
            this.load.image('fons', 'assets/cielo.jpg');

            // Precarguem els audios
            this.load.audio('sfx', 'assets/fx_mixdown.ogg');

            //Activem la fisica al joc
            this.physics.startSystem(Phaser.Physics.ARCADE);

        }

        create():void {
            super.create();
            //this.add.sprite(0, 0, 'fons');
            this.game.state.start('menu');
        }
    }
}