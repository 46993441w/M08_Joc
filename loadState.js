/// <reference path="phaser/phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var joc;
(function (joc) {
    var loadState = (function (_super) {
        __extends(loadState, _super);
        function loadState() {
            _super.apply(this, arguments);
        }
        loadState.prototype.preload = function () {
            _super.prototype.preload.call(this);
            this.stage.backgroundColor = "#124284";
            // Agregem un text de cargant
            this.carregant = this.add.text(this.world.centerX, 150, 'carregant...', { font: '40px Arial', fill: '#ff0044' });
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
        };
        loadState.prototype.create = function () {
            _super.prototype.create.call(this);
            //this.add.sprite(0, 0, 'fons');
            this.game.state.start('menu');
        };
        return loadState;
    })(Phaser.State);
    joc.loadState = loadState;
})(joc || (joc = {}));
//# sourceMappingURL=loadState.js.map