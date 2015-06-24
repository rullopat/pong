function Ball() {
  Entity.call(this)

  this.width = 20
  this.height = 20

  // TODO init the ball position and velocity
  this.x = game.width / 2 - this.width / 2
  this.y = game.height / 2 - this.height / 2

  //this.xVelocity = 5
  this.yVelocity = 5
}
Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments)

  // TODO check if the ball hit a wall and rebound (inverse velocity)
  if (this.y > game.height - this.height || this.y < 0) {
    this.yVelocity *= -1
  }
}
