import Ship from "./Car.js ";

const ship1 = new Ship();
const ship2 = new Ship();
const ship3 = new Ship();

const addCarHtml = document.getElementById("addCarHtml");

addCarHtml.addEventListener("click", () => {
  const ship = new Ship();
  listShip.push(ship);
});

const listShip = [ship1, ship2, ship3];

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    console.log("sa apasat keyRight");
    listShip.forEach((ship) => {
      ship.moveRight();
    });
  }
  if (event.code === "ArrowLeft") {
    console.log("sa apasat keyLeft");
    listShip.forEach((ship) => {
      ship.moveLeft();
    });
  }
  if (event.code === "ArrowDown") {
    console.log("sa apasat keyDown");
    listShip.forEach((ship) => {
      ship.moveDown();
    });
  }
  if (event.code === "ArrowUp") {
    console.log("sa apasat keyUp");
    listShip.forEach((ship) => {
      ship.moveTop();
    });
  }
});
