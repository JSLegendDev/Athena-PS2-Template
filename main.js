import { Timer } from "./src/utils/timer.js";
import { makeDebugOutput } from "./src/utils/debugOutput.js";

const WIDTH = 640;
const HEIGHT = 448;

function initScreen() {
  const screenMode = Screen.getMode();
  screenMode.width = WIDTH;
  screenMode.height = HEIGHT;
  Screen.setMode(screenMode);
  Screen.setVSync(true); // makes framerate stable
  Screen.setFrameCounter(true); // toggles frame counting and FPS collecting.
}

initScreen();
const font = new Font("default");
// Get the first player controller
// First player -> 0, Second player -> 1
const controller1 = Pads.get(0);

const sprite = new Image("assets/sonic.png");
const debug = makeDebugOutput(font, 30, 30);
const scale = 2;
let spritePosX = WIDTH / 2;
let spritePosY = HEIGHT / 2;
const speed = 3;
sprite.width = 32 * scale;
sprite.height = 44 * scale;
const runAnim = [
  { startx: 0, endx: 32, starty: 0, endy: 44 },
  { startx: 32, endx: 64, starty: 0, endy: 44 },
  { startx: 64, endx: 96, starty: 0, endy: 44 },
  { startx: 96, endx: 128, starty: 0, endy: 44 },
  { startx: 128, endx: 160, starty: 0, endy: 44 },
  { startx: 160, endx: 192, starty: 0, endy: 44 },
  { startx: 192, endx: 224, starty: 0, endy: 44 },
  { startx: 224, endx: 256, starty: 0, endy: 44 },
];
let spriteIndex = 0;
const frameDelay = 30;
const timer = new Timer();
const diagonalFactor = 1 / Math.sqrt(2);
Screen.display(() => {
  controller1.update();

  if (controller1.btns === Pads.RIGHT) {
    spritePosX = spritePosX + speed;
  }
  if (controller1.btns === Pads.LEFT) {
    spritePosX = spritePosX - speed;
  }

  if (controller1.btns === Pads.UP) {
    spritePosY = spritePosY - speed;
  }

  if (controller1.btns === Pads.DOWN) {
    spritePosY = spritePosY + speed;
  }

  if (controller1.btns === Pads.RIGHT + Pads.UP) {
    spritePosX = spritePosX + speed * diagonalFactor;
    spritePosY = spritePosY - speed * diagonalFactor;
  }

  if (controller1.btns === Pads.LEFT + Pads.UP) {
    spritePosX = spritePosX - speed * diagonalFactor;
    spritePosY = spritePosY - speed * diagonalFactor;
  }

  if (controller1.btns === Pads.RIGHT + Pads.DOWN) {
    spritePosX = spritePosX + speed * diagonalFactor;
    spritePosY = spritePosY + speed * diagonalFactor;
  }

  if (controller1.btns === Pads.LEFT + Pads.DOWN) {
    spritePosX = spritePosX - speed * diagonalFactor;
    spritePosY = spritePosY + speed * diagonalFactor;
  }

  font.print(WIDTH / 2, HEIGHT / 2, "Hello World!");

  if (timer.get() > frameDelay) {
    if (spriteIndex < runAnim.length - 1) {
      spriteIndex++;
      timer.reset();
    } else {
      spriteIndex = 0;
    }
  }
  sprite.startx = runAnim[spriteIndex].startx;
  sprite.endx = runAnim[spriteIndex].endx;
  sprite.starty = runAnim[spriteIndex].starty;
  sprite.endy = runAnim[spriteIndex].endy;
  sprite.draw(spritePosX, spritePosY);

  // debug.print(`spriteIndex: ${spriteIndex}`);
  debug.print(
    `controller1.btns : ${new String(controller1.btns)}, Pads.RIGHT : ${
      Pads.RIGHT
    }, Pads.LEFT : ${Pads.LEFT}`
  );
});
