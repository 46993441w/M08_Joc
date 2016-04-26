/// <reference path="phaser/phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var joc;
(function (joc) {
    var menuState = (function (_super) {
        __extends(menuState, _super);
        function menuState() {
            _super.apply(this, arguments);
        }
        menuState.prototype.create = function () {
            _super.prototype.create.call(this);
            this.add.sprite(0, 0, 'fons');
            this.introText = this.game.add.text(this.world.centerX, this.world.centerY, 'Agafa Canyes\nPresiona Enter', { font: '40px Arial', fill: '#ffffff' });
            this.introText.anchor.setTo(0.5, 0.5);
            this.cursor = this.game.input.keyboard.createCursorKeys();
        };
        menuState.prototype.update = function () {
            _super.prototype.update.call(this);
            if (this.input.keyboard.isDown(Phaser.KeyCode.ENTER)) {
                this.game.state.start("game");
            }
        };
        return menuState;
    })(Phaser.State);
    joc.menuState = menuState;
})(joc || (joc = {}));
//# sourceMappingURL=menuState.js.map