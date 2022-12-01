import { OptionsObject } from '../shared/interfaces/optionsCharter';
import Vec2 from '../shared/utils/vec2/Vec2';

class BaseCharter {
    public position = new Vec2({ x: 0, y: 0 });
    public velocity = new Vec2({ x: 0, y: 0 });

    public options: OptionsObject;

    public keys = {};
    private dt = 0;
    private currentFrame = 0;
    private lastFrame = 0;
    private rotate = 0;
    private initSubscription = false;

    constructor(options: OptionsObject) {
        this.options = options;
        this.subscriptionEvents();
    }

    subscriptionEvents() {
        if (this.initSubscription) return;

        window.onkeydown = (event) => {
            this.keys[event.keyCode] = true;
        };

        window.onkeyup = (event) => {
            this.keys[event.keyCode] = false;
        };

        // window.onmousemove = function (event) {};
    }

    move(dt: number) {
        this.position.add(this.velocity.multScalar(dt));
    }

    stop() {
        this.velocity.coordinates.x = 0;
        this.velocity.coordinates.y = 0;
    }

    render() {
        // createIcon({ x: this.position.x, y: this.position.y, rotate });
    }

    moveKey() {
        this.calculateDt();
        this.stop();
        if (this.keys[37] || this.keys[65]) {
            this.velocity.coordinates.x = -this.options.speed;
        }
        if (this.keys[39] || this.keys[68]) {
            this.velocity.coordinates.x = this.options.speed;
        }
        if (this.keys[38] || this.keys[87]) {
            this.velocity.coordinates.y = -this.options.speed;
        }
        if (this.keys[40] || this.keys[83]) {
            this.velocity.coordinates.y = this.options.speed;
        }
        this.move(this.dt);
        // preRender(rect);
        // requestAnimationFrame(moveKey);
    }

    private calculateDt() {
        this.currentFrame = +new Date();
        this.dt = this.currentFrame - this.lastFrame;
        this.lastFrame = this.currentFrame;
    }
}

export default BaseCharter;
