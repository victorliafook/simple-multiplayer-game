const commandMap = {
  ArrowUp: "moveUp",
  ArrowDown: "moveDown",
  ArrowLeft: "moveLeft",
  ArrowRight: "moveRight"
};

var observers = [];
var player;

var registerPlayer = function(playerId) {
  player = playerId;
}

var subscribeObserver = function(callback) {
  observers.push(callback);
}

var inputHandler = function(event) {
  console.log(event);
  
  var command = commandMap[event.key];
  notifyObservers(player, command);
};

var notifyObservers = function(player, command) {
  observers.forEach(function(observer) {
    observer(player, command);
  }); 
}

export default {
  inputHandler: inputHandler,
  registerPlayer: registerPlayer,
  subscribeObserver: subscribeObserver
}