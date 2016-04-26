/// <reference path="phaser/phaser.d.ts"/>

import Point = Phaser.Point;

module joc{
    export class SimpleGame extends Phaser.Game{
        constructor() {
            super(600, 600, Phaser.AUTO, 'gameDiv');

            this.state.add("load", loadState);
            this.state.add("menu", menuState);
            this.state.add("game", gameMain);

            this.state.start("load");
        }
    }
}

window.onload = () => {
    var game = new joc.SimpleGame();
};