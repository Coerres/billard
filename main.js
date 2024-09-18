import { Ball } from "./Ball.js";
import { clearCanvas } from "./canvas.js";
import { drawCloth, drawWood } from "./table.js";

drawCloth();

drawWood();

const b = new Ball({
    pos: {x: 400, y: 300},
    vel: {x: 4, y: 0},
    color: "red"
});
function loop(){
    clearCanvas();
    b.update();
    b.draw();
    requestAnimationFrame(loop);
}

loop();