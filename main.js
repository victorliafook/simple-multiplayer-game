import keyboarInput from "./keyboarInput.js";
import gameArena from "./gameArena.js";
import arenaRenderer from "./gameArenaRenderer.js";

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

arenaRenderer.render(canvas, gameArena, config);

