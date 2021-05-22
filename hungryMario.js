setBackdropURL('./images/outerspace.jpg')
var cheese = new Image({
  url: "./docs/images/picnic-cheese.png",
  width: 100,
  height: 60,
  y: 250,
})
var points = 0
var level = 0
var speed = -5
var boing = new Sound({
  url: "./docs/sounds/mario-jump.wav",
  loop: false,
  speed: "normal",
  volume: "normal"
})
var alien = new Sound({
  url: "./docs/sounds/alien.mp3",
  loop: false,
  speed: "normal",
  volume: "normal"
})

var mario = new Image({
  url: "./docs/images/mario.png",
  width: 150,
  height: 200,
  y: -200,
})
mario.setRotationStyle('ROTATE LEFT RIGHT')
forever(() => {
  if (keysDown.includes('Right')) {
    mario.x += 10
    mario.angle = RIGHT
  }
  if (keysDown.includes('Left')) {
    mario.x += -10
    mario.angle = LEFT
  }
})
forever(() => {
  cheese.y += speed
})
 var textSprite1 = new Text({
    text: () => "Game Over!", 
    size: 100, 
    color: "rgb(100, 50, 240)", 
    fontFamily: "arial"
 })
new Text({
  text: () => "Points: " + points,
  x: -550,
  y: 300,
  size: 30,
  color: rgb(100, 900, 420)
})
new Text({
  text: () => "Level: " + level,
  x: -550,
  y: 250,
  size: 30,
  color: rgb(100, 900, 420)
})
forever(() => {
  if (cheese.y < -250) {
 textSprite1.show()
 freeze()

}
  if (mario.touching(cheese)) {
cheese.x = random(-600, 600)
cheese.y = 250
points += 1
boing.startPlaying()
}
    if (points > 20) {
level += 1
speed += -5
points = 0
alien.startPlaying()
}
})

textSprite1.hide()

forever(() => {
 mario.x = mouseX
})
forever(() => {
  if (mario.x < 0) {
    mario.angle = LEFT 
  }
   if (mario.x > 0) {
    mario.angle = RIGHT
  }
})
