import { makeDebugOverlay } from "./src/debugOverlay.js";
import { Timer } from "./src/timer.js";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Screen.getMode();
Screen.setVSync(true); // makes framerate stable
Screen.setFrameCounter(true); // toggles frame counting and FPS collecting.
const debugOverlay = makeDebugOverlay();

const maniaFont = new Font("./assets/mania.ttf");
const sprite = new Image("./assets/sonic.png");
// Get the first player controller
// First player -> 0, Second player -> 1
const controller1 = Pads.get(0);
const spritePos = { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 };
const scale = 2;
const speed = 3;
sprite.width = 32 * scale;
sprite.height = 44 * scale;
const runAnimFrames = [
  { startx: 0, endx: 32, starty: 0, endy: 44 },
  { startx: 32, endx: 64, starty: 0, endy: 44 },
  { startx: 64, endx: 96, starty: 0, endy: 44 },
  { startx: 96, endx: 128, starty: 0, endy: 44 },
  { startx: 128, endx: 160, starty: 0, endy: 44 },
  { startx: 160, endx: 192, starty: 0, endy: 44 },
  { startx: 192, endx: 224, starty: 0, endy: 44 },
  { startx: 224, endx: 256, starty: 0, endy: 44 },
];
let frameIndex = 0;
const frameDuration = 30;
const timer = new Timer();
Screen.display(() => {
  controller1.update();

  if (controller1.pressed(Pads.RIGHT)) {
    spritePos.x = spritePos.x + speed;
  }

  if (controller1.pressed(Pads.LEFT)) {
    spritePos.x = spritePos.x - speed;
  }

  if (controller1.pressed(Pads.UP)) {
    spritePos.y = spritePos.y - speed;
  }

  if (controller1.pressed(Pads.DOWN)) {
    spritePos.y = spritePos.y + speed;
  }

  maniaFont.print(10, SCREEN_HEIGHT - 30, "Move Sonic around using the D-Pad");

  if (timer.get() > frameDuration) {
    if (frameIndex < runAnimFrames.length - 1) {
      frameIndex++;
      timer.reset();
    } else {
      frameIndex = 0;
    }
  }
  sprite.startx = runAnimFrames[frameIndex].startx;
  sprite.endx = runAnimFrames[frameIndex].endx;
  sprite.starty = runAnimFrames[frameIndex].starty;
  sprite.endy = runAnimFrames[frameIndex].endy;
  sprite.draw(spritePos.x, spritePos.y);

  debugOverlay.draw();
});
