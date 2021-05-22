<!DOCTYPE html>
<html>
<head>
<title>site</title>
</head>

<body>
<script>
  setBackdropURL('./docs/images/desert.jpg')
variable1 = 0

var ovalSprite1 = new Image({
  url: "./docs/images/unicorn.png",
  width: 100,
  height: 100,
})
ovalSprite1.onMouseDown(() => {
  variable1 += 1
  ovalSprite1.x = randomX()
  ovalSprite1.y = randomY()
  levelUp.startPlaying()
  ovalSprite1.height = random(10, 50)
  ovalSprite1.length = random(10, 50)
  ovalSprite1.color = randomColor()
})
var levelUp = new Sound({
  url: "./docs/sounds/mario-coin.wav",
  loop: false,
  speed: "normal",
  volume: "normal"
})

var variable
new Text({
  text: () => "Points: " + variable1,
  x: 0,
  y: 300,
  size: 30
})

var timer1
timer1 = 20
new Text({
  text: () => "Time: " + timer1,
  x: 200,
  y: 300,
  size: 30
})

  every(1, "seconds", () => {
    timer1 += -1
})
  forever(() => {
    if (timer1 === 0) {
var textSprite1 = new Text({
  text: () => "Game Over! Thx for playing :)", 
  size: 40, 
  color: "rgb(300, 20, 420)", 
  fontFamily: "comic-sans", 
  textAlign: "center"
})
  freeze()
}
  })
  </script>
</body>

</html>
