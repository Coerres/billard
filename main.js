import { Ball } from "./Ball.js";
import { clearCanvas } from "./canvas.js";
import { drawCloth, drawWood } from "./table.js";



const b = new Ball({
    pos: {x: 400, y: 300},
    vel: {x: 4, y: 1},
    color: "red",
});
function loop(){
    clearCanvas();
    drawCloth();
    drawWood();
    b.update();
    b.draw();
    requestAnimationFrame(loop);
}

loop();