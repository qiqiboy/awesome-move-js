/**
 * @overview
 *  用来方便的调用css3动画，支持transition和animation动画
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Movejs = factory();
    }
})(this, function() {
    class Movejs {
        constructor(node) {
            if (!this instanceof Movejs) {
                return new Movejs(node);
            }

            
        }

        querySelector(node) {
            
        }

        start = () => {

        }

        stop = () => this.reset();

        reset = () => {
            this.setStyle({
                transitionDuration: 0
            })
        }

        then() {

        }
    }

    return Movejs;
});
