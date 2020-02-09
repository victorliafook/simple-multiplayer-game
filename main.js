import keyboarInput from "./keyboarInput.js";

var arena = {
  players: {
    player1: {x: 30, y:30}
  },
  foods: {},
  movePlayer: function(playerid, command) {
    var player = this.players[playerid];
    switch (command) {
      case "moveUp":
        if (player.y > 0) {
          player.y--;
        }
      break;
      case "moveDown":
        if (player.y < 100) {
          player.y++;
        }
      break;
      case "moveLeft":
        if (player.x > 0) {
          player.x--;
        }
      break;
      case "moveRight":
        if (player.x < 100) {
          player.x++;
        }
      break;
      default:
    }
  }
};

var config = {
  playersColor: "gray",
  foodColor: "green"
};

var canvas = document.getElementById("screen");

keyboarInput.registerPlayer("player1");
keyboarInput.subscribeObserver(arena.movePlayer.bind(arena));

document.addEventListener("keydown", keyboarInput.inputHandler);

var renderArena = function(canvas, arena, config) {
  const context2D = canvas.getContext("2d");
  
  const players = arena.players;
  const foods = arena.foods;
  
  context2D.clearRect(0, 0, canvas.width, canvas.height);
  
  for (const playerId in players) {
    const player = players[playerId];
    context2D.fillStyle = config.playersColor;
    context2D.fillRect(player.x, player.y, 1, 1);
  }
  
  for (const foodId in foods) {
    const food = players[foodId];
    context2D.fillStyle = config.foodColor;
    context2D.fillRect(food.x, food.y, 1, 1);
  }
  
  requestAnimationFrame(function() {
    renderArena(canvas, arena, config);
  });
}

renderArena(canvas, arena, config);

