enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction) {
    console.log(`Moving ${Direction[direction].toLowerCase()}`)
}

move(Direction.Left)