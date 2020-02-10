let render = function(canvas, arena, config) {
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
    render(canvas, arena, config);
  });
}

export default {
  render: render
}