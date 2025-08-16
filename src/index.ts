import { AudioManager } from './engine/audio';
import { Game } from './engine/game';
import { Mouse } from './engine/mouse';
import { Scene } from './scene';

export const WIDTH = 800;
export const HEIGHT = 400;

// **第1步：在这里动态加载字体**
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
// **字体加载代码结束**


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

canvas.addEventListener('touchend', () => {
    if (game) {
        game.goFullScreen();
    }
});

const tick = (t: number) => {
    requestAnimationFrame(tick);
    ctx.resetTransform();

    // **第2步：在这里将字体应用到游戏画布**
    ctx.font = `20px 'ZCOOL KuaiLe', sans-serif`; // 设置一个默认字体
    // **应用字体代码结束**

    game.update(t, mouse);
    game.draw(ctx);
};

requestAnimationFrame(tick);
