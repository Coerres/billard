import { Ball } from "./Ball.js";
import { canvas, margin } from "./canvas.js";

export const COLORS = {
    WHITE: "rgb(210,210,211)",
    BLACK: "rgba(0,0,0)",
    YELLOW: "rgb(255,215,0)",
    ORANGE: "rgb(255,120,0)",
    RED: "rgb(230,10,10)",
    PURPLE: "rgb(90,0,170)",
    BLUE: "rgb(0,80,255)",
    BROWN: "rgb(150,20,0)",
    GREEN: "rgb(0,90,0)",
};

const start = {
    x : canvas.width - margin - 1/4 * (canvas.width - 2 * margin),
    y : 300 + margin,
};

const step = {
    x: 40,
    y: 20,
};

const balls = [
    new Ball({
        pos:{
            x: margin + 1/4 * (canvas.width - 2 * margin),
            y: start.y
        },
        color: COLORS.WHITE
    }),
    new Ball({
        pos: {x: start.x, y: start.y},
    })
];
