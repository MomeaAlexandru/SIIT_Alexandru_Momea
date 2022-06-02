class Ship {
  constructor() {
    const spaceshipSources = ["./media/blue-spaceship.png","./media/green-spaceship.png","./media/red-spaceship.png" ]
    const shipImg = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * 3);
    shipImg.src = spaceshipSources[randomNumber];
    shipImg.style.width = "100px";
    shipImg.style.position = "relative";
    shipImg.style.top = "0";
    shipImg.style.left = "0";

    this.stopCar = true;

    shipImg.addEventListener("click", () => {
      console.log("sa dat click ");
      this.stopCar = !this.stopCar;
    });

    this.shipElement = shipImg;

    document.body.appendChild(shipImg);
  }

  moveRight() {
    if (this.stopCar === false) {
      const oldLeft = parseInt(this.shipElement.style.left);
      this.shipElement.style.left = oldLeft + 10 + "px";
    }
  }
  

  moveLeft() {
    if (this.stopCar === false) {
      const oldLeft = parseInt(this.shipElement.style.left);
      this.shipElement.style.left = oldLeft - 10 + "px";
    }
  }

  moveDown () {
    if (this.stopCar === false) {
      const oldTop = parseInt(this.shipElement.style.top);
      this.shipElement.style.top = oldTop + 10 + "px";
    }
  }

  moveTop() {
    if (this.stopCar === false) {
      const oldTop = parseInt(this.shipElement.style.top);
      this.shipElement.style.top = oldTop - 10 + "px";
    }
  }
}
export default Ship;
