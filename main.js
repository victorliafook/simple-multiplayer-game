import keyboarInput from "./keyboarInput.js";
import gameArena from "./gameArena.js";

var config = {
  playersColor: "gray",
  foodColor: "green"
};

var canvas = document.getElementById("screen");
gameArena.setDimensions(canvas.width, canvas.height);

const playerId = "player1";
gameArena.registerPlayer(playerId, Math.floor(canvas.width / 2), Math.floor(canvas.height / 2));

keyboarInput.registerPlayer(playerId);
keyboarInput.subscribeObserver(gameArena.movePlayer);

document.addEventListener("keydown", keyboarInput.inputHandler);

var renderArena = function(canvas, arena, config) {
  const context2D = canvas.getContext("2d");
  
  const players = arena.getPlayers();
  const foods = arena.getFoods();
  
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

renderArena(canvas, gameArena, config);

