/// <reference path="phaser/phaser.d.ts"/>

module joc {
    export class gameMain extends Phaser.State {
        game:Phaser.Game;

        private jugador:Phaser.Sprite;
        private birra:Phaser.Group;
        private cursor:Phaser.CursorKeys;

        private VIDES = 3;
        private contador = 0;

        create():void {
            super.create();

            this.add.sprite(0, 0, 'fons');

            this.crearJugador();
            this.crearBirres();
            this.cursor = this.input.keyboard.createCursorKeys();
        }

        update():void {
            super.update();

        }

        private crearJugador():void {
            this.jugador = this.add.sprite(this.world.centerX, 50, 'jugador');
            this.jugador.anchor.setTo(0.5, 0.5);
            this.jugador.checkWorldBounds = true;
            this.jugador.health = this.VIDES;

            this.add.tween(this.jugador).to({y: this.world.height - 100}, 1000, Phaser.Easing.Bounce.Out, true);
            this.physics.enable(this.jugador, Phaser.Physics.ARCADE); // activar la fisica del jugador
        }

        private crearBirres():void {
            this.birra = this.add.group();
            this.birra.enableBody = true;
            this.birra.physicsBodyType = Phaser.Physics.ARCADE;
            this.birra.createMultiple(20, 'birra');

            this.birra.setAll('anchor.x', 0.5);
            this.birra.setAll('anchor.y', 0.5);
            this.birra.setAll('checkWorldBounds', true);

        }
    }
}
