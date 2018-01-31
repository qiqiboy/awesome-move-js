/**
 * @overview 用来方便的调用css3动画，支持transition和animation动画
 *
 * @class Movejs
 */

class Movejs {
    constructor(node) {
        if (!this instanceof Movejs) {
            return new Movejs(node);
        }
    }

    querySelector(node) {}

    start = () => {};

    stop = () => this.reset();

    reset = () => {
        this.setStyle({
            transitionDuration: 0
        });
    };

    then() {}
}

module.exports = Movejs;
