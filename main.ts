scene.setBackgroundColor(9)
let spooongborb = sprites.create(img`
. . . . f f f f f f f f f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . f 5 f 5 5 f 5 f . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . f 5 f f f f 5 f . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . f f f f f f f f . . . . 
. . . . f e e e e e e f . . . . 
. . . . f e f f f f e f . . . . 
. . . . f e f . . f e f . . . . 
. . . . f e f . . f e f . . . . 
. . . . f e f . . f e f . . . . 
. . . . f e f . . f e f . . . . 
. . . . f f f f . f f f f . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spooongborb.setPosition(80, 88)
controller.moveSprite(spooongborb)
let messageDad = "i ready "
spooongborb.say(messageDad)
let patturd = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f 3 3 f . . . . . . 
. . . . . . f 3 3 f . . . . . . 
. . . . . . f 3 3 f . . . . . . 
. . . . . f 3 3 3 f . . . . . . 
. f f f f 3 f 3 f 3 f f f f f . 
. f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
. f f f f 3 f f f 3 f f f f f . 
. . . . f f 3 3 3 f f . . . . . 
. . . . f 7 7 7 7 7 f f . . . . 
. . . . f 7 f f f f 7 f . . . . 
. . . . f 7 f . . f 7 f . . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(patturd, 100, 100)
messageDad = "Wumbo"
patturd.say(messageDad)
let squooge = sprites.create(img`
. . . f f f f f f f f f . . . . 
. . . f 6 6 6 6 6 6 f f . . . . 
. . . f 6 f 6 f 6 6 f . . . . . 
. . f f 6 6 6 6 6 6 f . . . . . 
. . f f f f f 6 f f f . . . . . 
. f f f f f f 6 f f f f f f . . 
. f 6 6 e e f e f e e 6 6 f . . 
. f f f f f f e f f f f f f . . 
. . . . . . f e f . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 6 6 6 6 6 6 6 f . . . . 
. . . f 6 f f f f f 6 f . . . . 
. . . f 6 f 6 f 6 f 6 f . . . . 
. . f f 6 f 6 f 6 f 6 f . . . . 
. . f 6 6 f 6 f 6 f 6 f . . . . 
. . f f f f f f f f f f f . . . 
`, SpriteKind.Player)
squooge.setPosition(108, 31)
messageDad = "my life is pain"
squooge.say(messageDad)
let ball = sprites.create(img`
. . . . . . f . . . f . . . . . 
. . . . . . f . . . f . . . . . 
. . . . . . f . . . f . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f f 7 f f . . . . . 
. . . . . f f 7 7 7 f f . . . . 
. . . . . f 7 1 1 1 7 f . . . . 
. f f f f f 7 1 f 1 7 f f f f f 
. . . . . f 7 1 1 1 7 f . . . . 
. . . . . f 7 7 7 7 7 f . . . . 
. . . . . f 7 f f f 7 f . . . . 
. . . . . f f 7 7 7 f f . . . . 
. . . . . . f f 7 f f . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . . f . f . . . . . . 
`, SpriteKind.Player)
ball.setPosition(12, 15)
game.onUpdateInterval(5000, function () {
    ball.y += controller.dx()
    ball.x += controller.dy()
    game.over(false)
})
