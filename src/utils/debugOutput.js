export function makeDebugOutput(font, posX, posY) {
  const BLACK = Color.new(0, 0, 0, 125);
  const WHITE = Color.new(255, 255, 255, 125);
  const borderWidth = 6;
  return {
    print(content) {
      font.scale = .5f;
      Draw.rect(posX - 3, posY - 3, 200 + borderWidth, 50 + borderWidth, WHITE);
      Draw.rect(posX, posY, 200, 50, BLACK);
      font.print(posX + 10, posY + 10, content);
      font.scale = 1;
    },
  };
}
