import { AudioManager } from './engine/audio';
import { Game } from './engine/game';
import { Mouse } from './engine/mouse';
import { Scene } from './scene';

export const WIDTH = 800;
export const HEIGHT = 400;

const canvas: HTMLCanvasElement = document.createElement('canvas');
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
const mouse: Mouse = { x: 0, y: 0 };
const audio = new AudioManager(false);
audio.prepare();
audio.play();
const game = new Game(audio, canvas);
game.scene = new Scene(game);

canvas.id = 'game';
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.appendChild(canvas);

let ratio = 1;
let x = 0;
let y = 0;

const resize = () => {
    ratio = Math.min(window.innerWidth / WIDTH, window.innerHeight / HEIGHT);
    canvas.style.transformOrigin = 'top left';
    x = (window.innerWidth - WIDTH * ratio) * 0.5;
    y = (window.innerHeight - HEIGHT * ratio) * 0.5;
    canvas.style.transform = `translate(${x}px,${y}px) scale(${ratio})`;
};

resize();
window.onresize = resize;

let isFull = false;
document.onfullscreenchange = () => isFull = !isFull;

document.onmousemove = (e: MouseEvent) => {
    mouse.x = isFull ? (e.offsetX - x) / ratio : e.offsetX;
    mouse.y = isFull ? (e.offsetY - y) / ratio : e.offsetY;
};

document.onkeydown = (e: KeyboardEvent) => {
    audio.play();
    game.pressed(e);
};

document.onmousedown = () => {
    audio.play();
    mouse.pressing = true;
    game.click(mouse);
};

// ** 新增的全屏逻辑 **
canvas.addEventListener('click', () => {
    if (game) {
        game.goFullScreen();
    }
});

canvas.addEventListener('touchend', () => {
    if (game) {
        game.goFullScreen();
    }
});
// ** 新增的全屏逻辑结束 **

const tick = (t: number) => {
    requestAnimationFrame(tick);
    ctx.resetTransform();
    game.update(t, mouse);
    game.draw(ctx);
};

requestAnimationFrame(tick);
