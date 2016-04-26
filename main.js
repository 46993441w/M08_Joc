/// <reference path="phaser/phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = Phaser.Point;
var joc;
(function (joc) {
    var SimpleGame = (function (_super) {
        __extends(SimpleGame, _super);
        function SimpleGame() {
            _super.call(this, 600, 600, Phaser.AUTO, 'gameDiv');
            this.state.add("load", joc.loadState);
            this.state.add("menu", joc.menuState);
            this.state.add("game", joc.gameMain);
            this.state.start("load");
        }
        return SimpleGame;
    })(Phaser.Game);
    joc.SimpleGame = SimpleGame;
})(joc || (joc = {}));
window.onload = function () {
    var game = new joc.SimpleGame();
};
//# sourceMappingURL=main.js.map