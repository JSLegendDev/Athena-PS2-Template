import { makeDebugOverlay } from "./src/debugOverlay.js";
import { Timer } from "./src/timer.js";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Screen.getMode();
const SCALE = 2;
const SPEED = 3;
const FRAME_WIDTH = 32;
const FRAME_HEIGHT = 44;

Screen.setVSync(true); // makes framerate stable
Screen.setFrameCounter(true); // toggles frame counting and FPS collecting.

// Loading our assets
const maniaFont = new Font("./assets/mania.ttf");
const sprite = new Image("./assets/sonic.png");

const debugOverlay = makeDebugOverlay();
// Get the first player controller
// First player -> 0, Second player -> 1
const pad = Pads.get(0);

const spritePos = { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 };
sprite.width = FRAME_WIDTH * SCALE;
sprite.height = FRAME_HEIGHT * SCALE;
const offset = FRAME_WIDTH * SCALE;
let spriteIsFlippedX = false;
// describes where each frame is located within the sprite.
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
  pad.update();

  if (pad.pressed(Pads.RIGHT)) {
    // makes sur to flip back the sprite
    if (spriteIsFlippedX) {
      sprite.width = Math.abs(sprite.width);
      spriteIsFlippedX = false;
      spritePos.x -= offset;
    }

    spritePos.x = spritePos.x + SPEED;
  }

  if (pad.pressed(Pads.LEFT)) {
    if (!spriteIsFlippedX) {
      sprite.width = -Math.abs(sprite.width);
      spriteIsFlippedX = true;
      spritePos.x += offset;
    }

    spritePos.x = spritePos.x - SPEED;
  }

  if (pad.pressed(Pads.UP)) {
    spritePos.y = spritePos.y - SPEED;
  }

  if (pad.pressed(Pads.DOWN)) {
    spritePos.y = spritePos.y + SPEED;
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
