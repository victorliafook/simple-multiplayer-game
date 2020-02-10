const commandMap = {
  ArrowUp: "moveUp",
  ArrowDown: "moveDown",
  ArrowLeft: "moveLeft",
  ArrowRight: "moveRight"
};

let observers = [];
let player;

let registerPlayer = function(playerId) {
  player = playerId;
}

let subscribeObserver = function(callback) {
  observers.push(callback);
}

let inputHandler = function(event) {
  console.log(event);
  
  let command = commandMap[event.key];
  notifyObservers(player, command);
};

let notifyObservers = function(player, command) {
  observers.forEach(function(observer) {
    observer(player, command);
  }); 
}

export default {
  inputHandler: inputHandler,
  registerPlayer: registerPlayer,
  subscribeObserver: subscribeObserver
}