// A black background
function Background() {}
Background.prototype.draw = function(context) {
  context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)
}

// Initialize and start the game
var game = new Game($('canvas')[0])

// Load the game entities
game.entities = [
  new Background(),
  new Ball(),
]

game.start()
$('canvas')[0].focus()
