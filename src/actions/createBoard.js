export default function CreateBoard(rows, tilesPerRow, colorCount) {
  return Array(rows).fill().map(() => Array(tilesPerRow).fill().map(() => tileColor(colorCount)))
}

function tileColor(colorCount) {
  return {
    color: Math.floor(Math.random() * colorCount),
    collected: false
  }
}