export const PLAYER_GRID = Array(220)
  .fill(0)
  .map((_, index) => {
    const row = String.fromCharCode(65 + Math.floor(index / 10));
    const column = index % 10;
    return { row, column };
  });
