import Player from './Player.js'
import Monster from './Monster.js'

const gameContainer = document.getElementById('game-container');

const player = new Player(gameContainer);

// am creea monstrii
  const monsterList = []
  for (let i = 0; i < 2; i++) {
    const monster = new Monster(gameContainer,i);
    monsterList.push(monster);
  }

setInterval(function () {
  for (let i = 0; i < monsterList.length; i++) {
    const monster = monsterList[i];
    moveMonster(monster);
  }
}, 100)
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


document.addEventListener("keydown", function (eventKeydown) {
  const m1 = document.querySelector('.monster0')
  const m2 = document.querySelector('.monster1')
  const pl = document.querySelector('.player')

  const square = pl.getBoundingClientRect(); 
  const monster1 = m1.getBoundingClientRect(); 
  const monster2 = m2.getBoundingClientRect();
  //console.log(square) ;
  


  if (eventKeydown.code === "ArrowDown") {
    // console.log("keydown", eventKeydown)
    player.moveDown()
    console.log(elementsOverlap(square, monster1, monster2 ))
  }
  if (eventKeydown.code === "ArrowLeft") {
    player.moveLeft()
    console.log(elementsOverlap(square, monster1, monster2 ))
  }
  if (eventKeydown.code === "ArrowRight") {
    player.moveRight()
    console.log(elementsOverlap(square, monster1, monster2 ))
  }
  if (eventKeydown.code === "ArrowUp") {
    player.moveUp()
    console.log(elementsOverlap(square, monster1, monster2 ))
  }
})


  const elementsOverlap = (pl, m1, m2) => {

    return !(
      (pl.top > m1.bottom || pl.top > m2.bottom ) ||
      
      (pl.right < m1.left || pl.right < m2.left) ||
      
      (pl.bottom < m1.top || pl.bottom < m2.top ) ||

      (pl.left > m1.right || pl.left > m2.right)
      );
  }
