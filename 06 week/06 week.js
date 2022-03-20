let obstacles = [
  {
    content: `<div class='obstacle' style="top: ${
      Math.random() * 335 + 45
    }px; left:${Math.random() * 335 + 45}px">

  </div>`,
  },
  {
    content: `<div class='obstacle' style="top: ${
      Math.random() * 335 + 45
    }px; left:${Math.random() * 335 + 45}px">
    
  </div>`,
  },
  {
    content: `<div class='obstacle' style="top: ${
      Math.random() * 335 + 45
    }px; left:${Math.random() * 335 + 45}px">
    
  </div>`,
  },
];
obstacles.forEach((obstacle) => {
  document.querySelector(".gameContainer").innerHTML += obstacle.content;
});

let player = document.querySelector(".player");
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top);
    if (oldTop < 350) {
      player.style.top = `${oldTop + 10}px`;
    }
  }
  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left);
    if (oldLeft < 350) player.style.left = `${oldLeft + 10}px`;
  }
  if (event.code === "ArrowLeft") {
    let oldLeft = parseInt(player.style.left);
    if (oldLeft > 0) player.style.left = `${oldLeft - 10}px`;
  }
  if (event.code === "ArrowUp") {
    let oldTop = parseInt(player.style.top);
    if (oldTop > 0) player.style.top = `${oldTop - 10}px`;
  }
});

// let obstacle = {

//
// }
// let obstacleList = [obstacle, obstacle]
// for (let i = 0; i < obstacleList.length; i++){
//   console.log(obstacle);
