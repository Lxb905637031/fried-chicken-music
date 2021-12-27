export function shuffle(target) {
  const arr = target.slice(target)
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomInt(i)
    swap(arr, i, j)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
