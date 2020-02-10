let arenaState = {
  width: 0,
  height: 0,
  players: {},
  foods: {}
}

let setDimensions = function(width, height) {
  arenaState.width = width;
  arenaState.height = height;
};

let registerPlayer = function(playerId, xCoord, yCoord) {
  let playerObj = {
    x: xCoord,
    y: yCoord
  };
  
  arenaState.players[playerId] = playerObj;
};

let getPlayers = function() {
  return arenaState.players;
};

let getFoods = function() {
  return arenaState.foods;
};

let movePlayer = function(playerid, command) {
  let player = arenaState.players[playerid];
  switch (command) {
    case "moveUp":
      if (player.y > 0) {
        player.y--;
      }
      break;
    case "moveDown":
      if (player.y < arenaState.height - 1) {
        player.y++;
      }
      break;
    case "moveLeft":
      if (player.x > 0) {
        player.x--;
      }
      break;
    case "moveRight":
      if (player.x < arenaState.width - 1) {
        player.x++;
      }
      break;
    default:
  }
}

export default {
  setDimensions: setDimensions,
  registerPlayer: registerPlayer,
  movePlayer: movePlayer,
  getPlayers: getPlayers,
  getFoods: getFoods
}