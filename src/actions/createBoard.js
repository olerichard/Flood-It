export default function CreateBoard(y, x, colorCount) {
  return Array(y).fill().map(() => Array(x).fill().map(() => color(colorCount)))
}

function color(colorCount) {
  return {
    color: Math.floor(Math.random() * colorCount),
    collected: false
  }
}