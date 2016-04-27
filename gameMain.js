/// <reference path="phaser/phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var joc;
(function (joc) {
    var gameMain = (function (_super) {
        __extends(gameMain, _super);
        function gameMain() {
            _super.apply(this, arguments);
            this.MAX_SPEED = 400; // pixels/second
            this.velocitat_birra = 100;
            this.ACCELERATION = 500; // pixels/second/second
            this.DRAG = 600; // pixels/second/second
            this.VIDES = 3;
            this.contador = 0;
            this.nivell = 1;
        }
        gameMain.prototype.create = function () {
            _super.prototype.create.call(this);
            this.crearFons();
            this.crearJugador();
            this.crearVides();
            this.crearBirres();
            this.cursor = this.input.keyboard.createCursorKeys();
        };
        gameMain.prototype.update = function () {
            _super.prototype.update.call(this);
            this.moureJugador();
            this.moureBirra();
            this.physics.arcade.overlap(this.jugador, this.birra, this.agafarBirra, null, this);
        };
        gameMain.prototype.crearFons = function () {
            this.add.sprite(0, 0, 'fons');
            var bmd = this.add.bitmapData(this.world.width, 45);
            // dibuixar el rectangle que apareixerà al final del canvas
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, this.world.width, 45);
            bmd.ctx.fillStyle = '#003300';
            bmd.ctx.fill();
            this.add.sprite(0, this.world.height - 43, bmd);
            this.gameLevel = this.add.text(this.world.width - 120, this.world.height - 43, "Nivell: " + this.nivell, { font: '16px Arial', fill: '#ffffff' });
            this.gamePuntuacio = this.add.text(this.world.width - 120, this.world.height - 23, "Puntuació: " + this.contador, { font: '16px Arial', fill: '#ffffff' });
        };
        gameMain.prototype.crearJugador = function () {
            this.jugador = this.add.sprite(this.world.centerX, 50, 'jugador');
            this.jugador.anchor.setTo(0.5, 0.5);
            this.jugador.checkWorldBounds = true;
            this.jugador.health = this.VIDES;
            this.add.tween(this.jugador).to({ y: this.world.height - 63 }, 1000, Phaser.Easing.Bounce.Out, true);
            this.physics.enable(this.jugador, Phaser.Physics.ARCADE); // activar la fisica del jugador
            this.jugador.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED); // x, y
            this.jugador.body.collideWorldBounds = true;
            this.jugador.body.drag.setTo(this.DRAG, this.DRAG); // x, y
        };
        gameMain.prototype.crearVides = function () {
            this.jugadorVides = this.add.group();
            for (var i = 0; i < this.VIDES; i++) {
                var vida = this.add.sprite(i * 30, this.world.height - 1, 'jugador');
                this.jugadorVides.add(vida);
            }
            this.jugadorVides.setAll('anchor.x', 0);
            this.jugadorVides.setAll('anchor.y', 1);
        };
        gameMain.prototype.crearBirres = function () {
            this.birra = this.add.sprite(this.rnd.integerInRange(0, this.world.width), 0, 'birra');
            this.birra.anchor.setTo(0.5, 0);
            this.birra.checkWorldBounds = true;
            this.physics.enable(this.birra, Phaser.Physics.ARCADE); // activar la fisica del jugador
            this.birra.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED); // x, y
            this.birra.body.collideWorldBounds = true;
        };
        gameMain.prototype.moureJugador = function () {
            if (this.cursor.left.isDown ||
                this.input.keyboard.isDown(Phaser.Keyboard.A)) {
                this.jugador.body.acceleration.x = -this.ACCELERATION;
                this.jugador.loadTexture('jugador_esquerra');
            }
            else if (this.cursor.right.isDown ||
                this.input.keyboard.isDown(Phaser.Keyboard.D)) {
                this.jugador.body.acceleration.x = this.ACCELERATION;
                this.jugador.loadTexture('jugador_dreta');
            }
            else {
                this.jugador.body.acceleration.x = 0;
                this.jugador.loadTexture('jugador');
            }
        };
        gameMain.prototype.moureBirra = function () {
            this.birra.body.velocity.y = this.velocitat_birra;
        };
        gameMain.prototype.agafarBirra = function () {
            this.contador += 1;
            this.gamePuntuacio.setText("Puntuació: " + this.contador);
            this.birra.body.y = 0;
            this.birra.body.x = this.rnd.integerInRange(0, this.world.width);
            if (this.contador % 10 == 0) {
                this.nivell++;
                this.velocitat_birra += 50;
                this.gameLevel.setText("Nivell: " + this.nivell);
            }
        };
        return gameMain;
    })(Phaser.State);
    joc.gameMain = gameMain;
})(joc || (joc = {}));
//# sourceMappingURL=gameMain.js.map