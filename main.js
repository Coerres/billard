import { Ball } from "./Ball.js";
import { clearCanvas } from "./canvas.js";
import { balls } from "./setupBalls.js";
import { drawCloth, drawWood } from "./table.js";


drawCloth();
drawWood();

balls.forEach((ball) => ball.draw());

/*
function loop(){
    clearCanvas();
    drawCloth();
    drawWood();
    b.update();
    b.draw();
    requestAnimationFrame(loop);
}

loop();
*/