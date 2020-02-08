var arena = {
  players: {},
  foods: {}
};

var config = {
  playersColor: 'gray',
  foodColor: 'green'
};

var canvas = document.getElementById("screen");


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

