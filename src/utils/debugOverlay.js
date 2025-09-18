export function makeDebugOverlay() {
  const font = new Font("default");
  return {
    draw() {
      font.print(10, 10, `FPS: ${Math.round(Screen.getFPS(10))}`);
    },
  };
}
