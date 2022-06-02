import Player from './Player.js'
import Monster from './Monster.js'

const gameContainer = document.getElementById('game-container');

const player = new Player(gameContainer);

// am creea monstrii
const monsterList = []

for (let i = 0; i < 5; i++) {
	const monster = new Monster(gameContainer,i);
	monsterList.push(monster);
}

/**
 * Misca un monstru random
 * @param {*} myMonster 
 */
function moveMonster(myMonster) {
  const movement = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  const randomIndex = Math.floor(Math.random() * movement.length);
  const randomMove = movement[randomIndex];

  if (randomMove === "ArrowDown") {
    myMonster.moveDown()
  }
  if (randomMove === "ArrowLeft") {
    myMonster.moveLeft()
  }
  if (randomMove === "ArrowRight") {
    myMonster.moveRight()
  }
  if (randomMove === "ArrowUp") {
    myMonster.moveUp()
  }
}

setInterval(function () {
	for (let i = 0; i < monsterList.length; i++) {
	  const monster = monsterList[i];
	  moveMonster(monster);
	}
}, 50)

document.addEventListener("keydown", function (eventKeydown) {
  const pl = document.querySelector('.player')
  const square = pl.getBoundingClientRect(); 

  if (eventKeydown.code === "ArrowDown") {
    player.moveDown()
	checkAndKill(square)
  }
  if (eventKeydown.code === "ArrowLeft") {
    player.moveLeft()
	checkAndKill(square)
  }
  if (eventKeydown.code === "ArrowRight") {
    player.moveRight()
	checkAndKill(square)
  }
  if (eventKeydown.code === "ArrowUp") {
    player.moveUp()
	checkAndKill(square)
  }
})

const elementsOverlap = (player, monster) => !(player.right < monster.left || 
	player.left > monster.right || 
	player.bottom < monster.top || 
	player.top > monster.bottom)

const checkAndKill = (player) => {
	let shouldKill = false
	monsterList.forEach(monst => {
		const monster = monst.element.getBoundingClientRect()
		if(elementsOverlap(player, monster)){
			shouldKill = true
		}
	})
	if(shouldKill) alert('Game Over')
}