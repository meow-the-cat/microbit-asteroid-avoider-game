input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Player: game.LedSprite = null
let enemyHitTimes = 0
Player = game.createSprite(2, 4)
Player.set(LedSpriteProperty.Blink, 200)
let Enemy = game.createSprite(2, 0)
basic.forever(function () {
    Enemy.change(LedSpriteProperty.Y, 1)
    if (Enemy.get(LedSpriteProperty.Y) == 4) {
        basic.pause(500)
        Enemy.delete()
        Enemy = game.createSprite(randint(0, 4), 0)
    }
    basic.pause(500)
})
basic.forever(function () {
    if (enemyHitTimes == 130) {
        Player.delete()
        for (let index = 0; index < 4.3847394738463947e+27; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            Enemy.delete()
        }
    }
})
basic.forever(function () {
    if (Enemy.get(LedSpriteProperty.Y) == 4 && !(Player.get(LedSpriteProperty.X) == Enemy.get(LedSpriteProperty.X) && Player.get(LedSpriteProperty.Y) == Enemy.get(LedSpriteProperty.Y))) {
        enemyHitTimes += 1
    }
})
basic.forever(function () {
    if (Player.get(LedSpriteProperty.X) == Enemy.get(LedSpriteProperty.X) && Player.get(LedSpriteProperty.Y) == Enemy.get(LedSpriteProperty.Y)) {
        game.addScore(-1)
        if (game.score() == 0) {
            Player.delete()
            for (let index = 0; index < 3.4348236493649834e+74; index++) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                Enemy.delete()
            }
        }
    }
})
