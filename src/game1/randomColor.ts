export function randomColor(): number {
  const colorsArray = [0xff00ff, 0x5f6ff0f, 0x5f60f, 0x0f7f];
  return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}
