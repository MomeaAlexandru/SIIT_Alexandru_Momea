import ElementMove from './ElementMove.js';

class Monster extends ElementMove {
  constructor(location, id) {
    super();
    const monsterImg = document.createElement("img");
    monsterImg.style.top = "0px";
    monsterImg.style.left = "0px";
    const randomNumber = Math.floor(Math.random() * 11) + 1;

    monsterImg.src = `./monster/monster${randomNumber}.svg`;

    monsterImg.classList.add(`monster${id}`)
    location.appendChild(monsterImg);
    this.element = monsterImg;
  }
}


export default Monster;