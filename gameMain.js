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
            this.VIDES = 3;
            this.contador = 0;
        }
        gameMain.prototype.create = function () {
            _super.prototype.create.call(this);
            this.add.sprite(0, 0, 'fons');
            this.crearJugador();
            this.crearBirres();
            this.cursor = this.input.keyboard.createCursorKeys();
        };
        gameMain.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        gameMain.prototype.crearJugador = function () {
            this.jugador = this.add.sprite(this.world.centerX, 50, 'jugador');
            this.jugador.anchor.setTo(0.5, 0.5);
            this.jugador.checkWorldBounds = true;
            this.jugador.health = this.VIDES;
            this.add.tween(this.jugador).to({ y: this.world.height - 100 }, 1000, Phaser.Easing.Bounce.Out, true);
            this.physics.enable(this.jugador, Phaser.Physics.ARCADE); // activar la fisica del jugador
        };
        gameMain.prototype.crearBirres = function () {
            this.birra = this.add.group();
            this.birra.enableBody = true;
            this.birra.physicsBodyType = Phaser.Physics.ARCADE;
            this.birra.createMultiple(20, 'birra');
            this.birra.setAll('anchor.x', 0.5);
            this.birra.setAll('anchor.y', 0.5);
            this.birra.setAll('checkWorldBounds', true);
        };
        return gameMain;
    })(Phaser.State);
    joc.gameMain = gameMain;
})(joc || (joc = {}));
//# sourceMappingURL=gameMain.js.map