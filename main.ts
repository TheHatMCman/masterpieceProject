namespace SpriteKind {
    export const backgroundBuilding = SpriteKind.create()
    export const chestContainer = SpriteKind.create()
    export const endingPoint = SpriteKind.create()
    export const inanimate = SpriteKind.create()
}
function levelThree () {
    info.setLife(5)
    levelSelector = 3
    chestOpen = 0
    chest.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 5 5 4 4 4 4 4 . . 
        . . c c c c c 5 5 c c c c c . . 
        . . c 4 e 4 e b b 4 e e c c . . 
        . . 4 e 4 e 4 e e e e 4 e e . . 
        . . e e 4 e e e e 4 e e e e . . 
        . . 4 e e e 4 e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . 4 e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        `)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffff
        ffffffffffffffffffffffffffccfffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffcccfcffffffffffcfffcfffffffffffffffffffffffffffffffffffffcffcfffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffccccfffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffff5ffffffffffffff
        fffffffffffffccfffffffcccccccccfcccccccccccccfcccccccfccccfcfcccccccfccccccccccccccccccccccffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffccfffffffccccccfccfccccccccccfcccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccfcccccfffff5ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffcccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccfccccccccccccccccccfcfcffffcffffffffffffffffffffffffffff
        fffffffffccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccfcccccccccccccfffffffffffffcfffffffffff
        fcfffffccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccffccccffffffffffffffffffffff
        fffffccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccffffffffffffffffff
        fffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccfffffffcffffff
        fccffcffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcffffff
        ccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccfffffcfffff
        cfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcfffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccc5ccccccccccccccccccccccccc5cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff
        cccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff
        ccccc5cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccc5cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbcccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccc5cccccccccccccccccccccccccccccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbccccccccccccccccccccccccccccccc5cccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbcccccccccccccccccccccccccccccc
        cccccccccccccccccccccccbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccbccccccccccccccccccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbcccccccccccccccc
        cccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbcccccccccccccccccccccccccccccc
        cccccbcccccccccccccccccccccccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbccccccccccccccccccccccccccccccc5cccc
        ccccccccccccccccccccccbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcccccccccccccccccccccccccccccccc
        bccccccccccccccccccccccccccccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccc
        ccccccccccccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccbccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccc5ccccccccccc
        ccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbcccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccc
        fcccccccccccccccccc5ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbccccccccccccccccccccccccccccccc
        ffcccccccccccccccccccccccccccccccccbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccc
        ffcfccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccc
        ffccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccccccccccccccccccccccccccccccccccc
        fffccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbcccccccccccccccccccccccccccccccccfcc
        fcfcfcccccccccccccccccccccccccccccccccccbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccf
        fffcccccccccccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccf
        fffccccccccccccccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccf
        ffffcccccccccccccccccccccccccccccccccccccccccccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccfcf
        ffffcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccf
        fffccfccccccccccccccccccccccccccccccccccccccccccccccccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccfcff
        ffffcccccccccccccccccccccccccccccccccccccccccccccccccccccbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccff
        fffffccfccccccccccccccccccccccccccccccccccccccccccccbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccfcfff
        ffffcfccccccccccccccccccccccccccc5ccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbcccccccccccccccccccccccccccccccccccc5ccccccccccccccccfff
        fffffffcccfcccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccbcccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
        fffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccc5cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff
        fffffcffccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccbccbcccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccffff
        ffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffff
        fffffffcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcffff
        fffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccfffff
        ffffffcfffcfcccccfcccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcffffff
        ffffffffffccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5cccccccccccccccccccccccccccccccccccccccccccfccccfffffff
        ffffffffcffcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcfffff
        ffffffffcffcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcffffff
        ffffffffffffcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccfffffffffff
        ffffffffffcffccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffff
        ffffffffffcffcccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccfcfffffffffff
        fffffffffffcffcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffff
        fffffffffffcfffcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffff
        fffffffffffccffccfccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccffcfffcfffffffffff
        ffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccfffffffffffffffffff
        ffffffffffffffcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffff
        fffffffffffffffffccfccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccffffcffffcfffffffffffff
        ffffffffffffffffffcffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffff
        fffffffffffffffffffcccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccfffffcffcffffffffffffffffff
        ffffffffffffffcffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffff
        fffffffffffffffffffffffccfcccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccfcccccccfcccccffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffccfcccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcffcccccccfcccffccccccffffffcfffffffffffffffffffffffff
        fffffffffffffffffffcfffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccfffccccccccccfffcffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcccccccfcccffccccccccccccccccccccccccccccccccffcccccffccfcffcccfffccccccccccccccfccccccccccfffcfffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcccccccccccccfccffccccccccccccccccccccccffccccccccccccccccccccccccccccccffccccccfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffccccccccfcccccccccccccccccccfccccfccccccccccccccccccccccccccccccffcccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffcfccfffffffffffccccccccfccccccccccfffccccfcccccccfcccccccfcccccccccffcccffffffffffffffffffcfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffccffffffffffcccccccccccccccccccccccccccccccccfcccccffffffffffffffffffffccfffcccffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcffccccfffccffffcccccccccccccccccfffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffccffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(0, 5))
    tiles.placeOnTile(transitionWall, tiles.getTileLocation(3, 4))
    tiles.placeOnTile(endingCar, tiles.getTileLocation(29, 1))
    tiles.placeOnTile(enemyTemplate, tiles.getTileLocation(6, 7))
    tiles.placeOnTile(enemy1, tiles.getTileLocation(14, 24))
    tiles.placeOnTile(enemy2, tiles.getTileLocation(29, 16))
    tiles.placeOnTile(chest, tiles.getTileLocation(17, 18))
    resetFlag()
}
function enemySpawn () {
    enemyTemplate = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e 2 2 2 2 . . . . . 
        . . . . . . e 2 2 2 2 . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f f 1 1 1 1 1 1 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . c c . . . . . . . . c c . . 
        . . c c . . . . . . . . c c . . 
        `, SpriteKind.Enemy)
    enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e 2 2 2 2 . . . . . 
        . . . . . . e 2 2 2 2 . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f f 1 1 1 1 1 1 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . c c . . . . . . . . c c . . 
        . . c c . . . . . . . . c c . . 
        `, SpriteKind.Enemy)
    enemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e 2 2 2 2 . . . . . 
        . . . . . . e 2 2 2 2 . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f f 1 1 1 1 1 1 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . c c . . . . . . . . c c . . 
        . . c c . . . . . . . . c c . . 
        `, SpriteKind.Enemy)
    enemySpawns = 1
}
function gravityOnWorld () {
    thePlayer.ay = 300
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuScreen == 1) {
        menuSelect += -1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    transitionState = 1
    transitionSmooth()
    levelTwo()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    thePlayer.vy = 500
    pause(100)
    info.setLife(0)
})
function transitionSmooth () {
    pause(200)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuScreen == 1) {
        menuConfirm = 1
    }
    if (jumpCounter == 0) {
        jumpCounter = 1
        thePlayer.vy = -150
    } else if (jumpCounter == 1) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.endingPoint, function (sprite, otherSprite) {
    if (menuSelect == 1) {
        if (levelOneComplete == 1) {
            levelTwo()
        }
        if (levelTwoComplete == 1) {
            levelThree()
        }
    } else if (menuSelect == 2) {
        if (levelSelector == 1) {
            tiles.placeOnTile(enemyTemplate, tiles.getTileLocation(0, 0))
            tiles.placeOnTile(enemy1, tiles.getTileLocation(0, 0))
            tiles.placeOnTile(enemy2, tiles.getTileLocation(0, 0))
            levelOneComplete = 1
        } else if (levelSelector == 2) {
            tiles.placeOnTile(enemyTemplate, tiles.getTileLocation(0, 0))
            tiles.placeOnTile(enemy1, tiles.getTileLocation(0, 0))
            tiles.placeOnTile(enemy2, tiles.getTileLocation(0, 0))
            levelTwoComplete = 1
        } else if (levelSelector == 3) {
            tiles.placeOnTile(enemyTemplate, tiles.getTileLocation(0, 0))
            tiles.placeOnTile(enemy1, tiles.getTileLocation(0, 0))
            tiles.placeOnTile(enemy2, tiles.getTileLocation(0, 0))
            levelThreeComplete = 1
        }
        tiles.setTilemap(tilemap`hubWorld`)
        hubWorld()
        tiles.placeOnTile(thePlayer, tiles.getTileLocation(4, 13))
    }
    healthReward()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    transitionSmooth()
    levelThree()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    thePlayer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . f 1 1 1 1 1 1 1 f f f . . . . 
        . f 1 1 1 1 1 1 1 f f f . . . . 
        . f 1 1 1 f 1 1 1 f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . . f f f 1 1 1 1 f f . . . . . 
        . . f f 1 1 1 1 1 f f . . . . . 
        . . . . . . 1 f f 1 1 . . . . . 
        . f f f f . 1 1 1 1 1 . f f . . 
        . f f f f . 1 1 1 1 1 . f f . . 
        . . . . . . 1 1 1 1 1 . f f . . 
        . . . . f f f f . f f f . . . . 
        . . . . f f f f . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . f 1 1 1 1 1 1 1 f f f . . . . 
        . f 1 1 1 1 1 1 1 f f f . . . . 
        . f 1 1 1 f 1 1 1 f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . . f f f 1 1 1 1 f f . . . . . 
        . . f f f 1 1 1 1 f f . . . . . 
        . . . . . . 1 f f 1 1 . . . . . 
        . . . f f . 1 1 1 1 1 f f f . . 
        . . . f f . 1 1 1 1 1 f f f . . 
        . . . f f . 1 1 1 1 1 . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        `],
    100,
    true
    )
})
function levelOne () {
    info.setLife(5)
    levelSelector = 1
    chestOpen = 0
    chest.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 5 5 4 4 4 4 4 . . 
        . . c c c c c 5 5 c c c c c . . 
        . . c 4 e 4 e b b 4 e e c c . . 
        . . 4 e 4 e 4 e e e e 4 e e . . 
        . . e e 4 e e e e 4 e e e e . . 
        . . 4 e e e 4 e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . 4 e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        `)
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(1, 10))
    tiles.placeOnTile(transitionWall, tiles.getTileLocation(5, 9))
    if (enemySpawns == 0) {
        enemySpawn()
    }
    tiles.placeOnTile(enemyTemplate, tiles.getTileLocation(48, 8))
    tiles.placeOnTile(enemy1, tiles.getTileLocation(23, 10))
    tiles.placeOnTile(enemy2, tiles.getTileLocation(22, 3))
    tiles.placeOnTile(chest, tiles.getTileLocation(59, 5))
    tiles.placeOnTile(endingCar, tiles.getTileLocation(59, 11))
    resetFlag()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    transitionSmooth()
    levelOne()
})
function initializeGame () {
    hubWorld()
    thePlayer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . f f f 1 1 1 1 1 1 1 f . 
        . . . . f f f 1 1 1 1 1 1 1 f . 
        . . . . f f f 1 1 1 f 1 1 1 f . 
        . . . . f f f f f f f f f f f . 
        . . . . . f f 1 1 1 1 f f f . . 
        . . . . . f f 1 1 1 1 f f f . . 
        . . . . . 1 1 f f 1 . . . . . . 
        . . f f f 1 1 1 1 1 . f f f f . 
        . . f f f 1 1 1 1 1 . f f f f . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . f f f f . f f f f f . . . 
        . . . f f f f . f f f f f . . . 
        `, SpriteKind.Player)
    controller.moveSprite(thePlayer, 80, 0)
    scene.cameraFollowSprite(thePlayer)
    transitionWall = sprites.create(img`
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        `, SpriteKind.inanimate)
    chest = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.chestContainer)
    chest.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 5 5 4 4 4 4 4 . . 
        . . c c c c c 5 5 c c c c c . . 
        . . c 4 e 4 e b b 4 e e c c . . 
        . . 4 e 4 e 4 e e e e 4 e e . . 
        . . e e 4 e e e e 4 e e e e . . 
        . . 4 e e e 4 e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . 4 e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        `)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, thePlayer)
    thePlayer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . f f f 1 1 1 1 1 1 1 f . 
        . . . . f f f 1 1 1 1 1 1 1 f . 
        . . . . f f f 1 1 1 f 1 1 1 f . 
        . . . . f f f f f f f f f f f . 
        . . . . . f f 1 1 1 1 1 f f . . 
        . . . . . f f 1 1 1 1 1 f f . . 
        . . . . . 1 1 f f 1 . . . . . . 
        . . f f f 1 1 1 1 1 . f f f f . 
        . . f f f 1 1 1 1 1 . f f f f . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . f f f f . f f f f f . . . 
        . . . f f f f . f f f f f . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, thePlayer)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    thePlayer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . f f f 1 1 1 1 1 1 1 f . 
        . . . . f f f 1 1 1 1 1 1 1 f . 
        . . . . f f f 1 1 1 f 1 1 1 f . 
        . . . . f f f f f f f f f f f . 
        . . . . . f f 1 1 1 1 f f f . . 
        . . . . . f f 1 1 1 1 f f f . . 
        . . . . . 1 1 f f 1 . . . . . . 
        . . f f . 1 1 1 1 1 . f f f f . 
        . . f f . 1 1 1 1 1 . f f f f . 
        . . f f . 1 1 1 1 1 . . . . . . 
        . . . . f f f . f f f f . . . . 
        . . . . f f f . f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . f f f 1 1 1 1 1 1 1 f . 
        . . . . f f f 1 1 1 1 1 1 1 f . 
        . . . . f f f 1 1 1 f 1 1 1 f . 
        . . . . f f f f f f f f f f f . 
        . . . . . f f 1 1 1 1 f f f . . 
        . . . . . f f 1 1 1 1 f f f . . 
        . . . . . 1 1 f f 1 . . . . . . 
        . . f f f 1 1 1 1 1 . f f . . . 
        . . f f f 1 1 1 1 1 . f f . . . 
        . . . . . 1 1 1 1 1 . f f . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    thePlayer.fy = 50
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuScreen == 1) {
        menuSelect += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (controller.up.isPressed() == true) {
        thePlayer.vy = -50
    }
})
function resetFlag () {
    tiles.placeOnTile(completionOne, tiles.getTileLocation(0, 0))
    tiles.placeOnTile(completionTwo, tiles.getTileLocation(0, 0))
    tiles.placeOnTile(completionThree, tiles.getTileLocation(0, 0))
    if (levelSelector == 3) {
        tiles.placeOnTile(completionOne, tiles.getTileLocation(0, 33))
        tiles.placeOnTile(completionTwo, tiles.getTileLocation(0, 33))
        tiles.placeOnTile(completionThree, tiles.getTileLocation(0, 33))
    }
}
function healthReward () {
    if (info.life() == 5) {
        info.changeScoreBy(5000)
    }
    if (info.life() == 4) {
        info.changeScoreBy(2000)
    }
    if (info.life() == 3) {
        info.changeScoreBy(1000)
    }
    if (info.life() == 2) {
        info.changeScoreBy(500)
    }
    if (info.life() == 1) {
        info.changeScoreBy(0)
    }
}
function menuScreen2 () {
    menuScreen = 1
    menuSelect = 1
    menuConfirm = 0
    optionOne = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    optionTwo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . 1 1 . . . . 1 1 . . . . . 
        . . . 1 . . . . . . . 1 . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . 1 . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . 1 . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        `, SpriteKind.Player)
    optionThree = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . . . . . 
        . . 1 . . . . . 1 1 . . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . . 1 1 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . 1 1 1 . . . . . . . . . 
        . . 1 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    optionOne.setPosition(scene.screenWidth() / 2, 70)
    optionTwo.setPosition(scene.screenWidth() / 2, 80)
    optionThree.setPosition(scene.screenWidth() / 2, 100)
}
function gameWin () {
    if (levelOneComplete == 1) {
        if (levelTwoComplete == 1) {
            if (levelThreeComplete == 1) {
                game.splash("Congradulations, you just saved", "the Universe")
                game.over(true, effects.confetti)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.chestContainer, function (sprite, otherSprite) {
    if (controller.B.isPressed() == true && chestOpen == 0) {
        info.changeScoreBy(500)
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b b b b b . . . . 
            . . . b b b b b b b b b b . . . 
            . . b b b b b b b b b b b b . . 
            . . b b b b b 4 4 b b b b b . . 
            . . c c c c c 4 4 c c c c c . . 
            . . c b c b c e e b c c c c . . 
            . . b c b c b c c c c b c c . . 
            . . c c b c c c c b c c c c . . 
            . . b c c c b c c c c c c c . . 
            . . c c c c c c c c c c c c . . 
            . . b c c c c c c c c c c c . . 
            . . c c c c c c c c c c c c . . 
            `)
        chestOpen = 1
    } else if (controller.B.isPressed() == true && chestOpen == 1) {
        info.changeScoreBy(0)
    }
})
function hubWorld () {
    menuScreen = 0
    info.setLife(1)
    tiles.setTilemap(tilemap`hubWorld`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(2, 13))
    endingCar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f 9 9 9 9 . . . . 
        . f f f f f f 9 9 9 9 9 . . . . 
        . f f f f f f 9 9 9 9 9 9 . . . 
        . f f f f f f 9 9 9 9 9 9 f f . 
        . f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f . 
        . . c c c . . . . . . c c c . . 
        . . c c c . . . . . . c c c . . 
        `, SpriteKind.endingPoint)
    tiles.placeOnTile(endingCar, tiles.getTileLocation(0, 13))
    scene.setBackgroundImage(img`
        4444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444
        4444444444444444455555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444
        4444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444
        4444444455555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        4444455555555555554555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555545555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5455545555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        55d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d55555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d5555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        555555555555555555555555d5555555555555555555555555555555555d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        55d5555d55555d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d555555
        5555555555555555555555555555555555555555d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        555555555d555d5555555555555555555555555555555555555555555555555555555555555555555555d555555555555555555555555555555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555555555555555555d555555555555555d555555555555555555555555555555555555555555555555d55555555555555555555555555555555555555555555
        555d5d555555555555555555555555555555555555555555555555555555555555555555555555555555555555d5555555555555555555555555555555555555555d55555555555555555d5555555555
        55555555555555555555555555d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        555d5555555555555555555555555555555555555555d55555555555555555555555555555555555555555555555555555555555555555555555555555d5555555555555555555555555555555555555
        55555555555555555555555555555555555d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        555555555555555555555d55555555555555555555555555555555555555555555555555555555d555555555555555555555555555555555555555555555555555555555555555555555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d555555555555555555555555555555555555555555555555555555555d55555
        555d5555555555d55555555555555555555555555555555555555555555555555d5d555555555555555555555555555555555555555555555555555555555555555555d5555555555555555555555555
        5555555555d555555555555555555555555555555555555555555555555555555555555555d55555555555555d555555555555555555555555555555555555d555555555555555555555555555555555
        555555555555555555555555555555555555555555555555d55555555d5555555555d5555555555555555555555d55555555555555555555555555555555555555555555555555555555555555555555
        5555d555555555d5555555555555555555555d55555555d555555d55555555555d555555555d55555d55dd5555555555555555555555555555d555555555555555555555555555555555555555555555
        55555555555555555555555555555d55555d555555555555555555555555555555555555d555555555555555555555555555555d55555555555555555555555555555555555555555555555555555555
        5555555555555555555555d555555555555555555555555d555555d5555d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555d5555555555555
        55555555555555555555555555555555555555555d555555555555555555d55555555d55555555555555555555555555555555555555555555555555555555d555555d55555555555555555555555555
        555555555555555555555555555555555d55d555555555555555d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d55555555555555555555555d5555555555555555d555555d555d555d5555d5555555555
        55555555555555555555555d5d5d555555555555555555555555555555555555555555555d5555d55555555555555555555555555d5555555555555555d55555555555d5555555555555555555555555
        55555555555d5dd555d555555555d55d55555d5555555d5555555555555d55d5555d555d555555555d55d555555555555d555d555555555555555555d555555555555555555555555555555555555555
        5d5555555555555555555555555d5555555555555555555555555555555555555555555d555d55555555555555555d555555555555555555555555555555555555d55555555555555555555555555555
        555d5555d55555555555555d5555555555555555555555555d555555555555555555555555555555555555555555555555555555d5555555555555555555555d5555555d555555555d5555d555555555
        555555555555555555555555555d555d55555555555555555555555555555d55555d55555555555555555555555555555d5555d555d555555555555555555555555d5d555555d5d55555555555555555
        555555555555555555555555d55555555555555555555555555555555555555555555555d55d5d555555d5555d5555555555555555555555555d55d555555d55d55555d5555555555555555555555555
        5d5555555555555555555555555555555555555555555555d5555d555555555555555555555555555d55555d555555d5d5d5d55dd5dddddddd5dddddddd555555d5555555d555555d55d55555555d555
        55555555555555555555555d55dd5555555555555555555d5555555555555d555d555d555555ddd5ddddddddddddddddd5dd5dddddddd5dddddd5dddddddddddddddd555555555d5555555d5d5d55555
        555555d5555555555555555555555555555d5555555d55555d555555d5555555555ddd5ddddddddddddddddd5dddddddddddddddddddddddddddddddddddddd5dddd5ddd5dddd55555dd555555555555
        555555555555d55555555555555d5555555555555555555555ddd5dddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddd555d55555555
        5555555555555555555555555555555555d555555d55dd5dddd5ddddd5ddd5ddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddd555d55
        5555555555d555555d5555555d5d55555ddd5dddd5dddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555
        55dd55555555d555555555555d55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        55555555d5555555d5555d55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        555555555d55d55dddddddddddddddddd5dddddd5ddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        5d55d5d55ddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        55555dddddddddddd5dddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddededdd
        dddddddddeddddedddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddedddddddddddddddddedddddddddddddddddddddd
        dededddddddddddddddddddddddddddedededdddddddddddddedddddeddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddd
        edddeddedddddedddedddddddddddddddddedddddedddddddddedddddddddedddddedddddddddddddedddedddddddedddddddddddedddddddddedddddddddddddddddeddddddddddddedddddddddeded
        ddedddddddddeddedddeddddeddeddddddddddeddddddddedddddddeddedddddddddddddddddddddddddddddeddddeddddeddddddddddeddeddddddddddddeddddddddddddedddddedddddddddeddddd
        `)
    levelSelector = 0
    if (enemySpawns == 0) {
        enemySpawn()
    }
    tiles.placeOnTile(enemyTemplate, tiles.getTileLocation(0, 0))
    tiles.placeOnTile(enemy1, tiles.getTileLocation(0, 0))
    tiles.placeOnTile(enemy2, tiles.getTileLocation(0, 0))
    completionOne = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 2 2 2 . . . . . . 
        . . . f 2 2 2 2 3 2 3 . . . . . 
        . . . f 2 2 2 2 2 2 2 2 . . . . 
        . . . f c 2 2 2 2 2 2 2 . . . . 
        . . . . f 2 c 2 2 2 2 2 . . . . 
        . . . . f c 2 2 c . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.inanimate)
    completionTwo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 2 2 2 . . . . . . 
        . . . f 2 2 2 2 3 2 3 . . . . . 
        . . . f 2 2 2 2 2 2 2 2 . . . . 
        . . . f c 2 2 2 2 2 2 2 . . . . 
        . . . . f 2 c 2 2 2 2 2 . . . . 
        . . . . f c 2 2 c . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.inanimate)
    completionThree = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 2 2 2 . . . . . . 
        . . . f 2 2 2 2 3 2 3 . . . . . 
        . . . f 2 2 2 2 2 2 2 2 . . . . 
        . . . f c 2 2 2 2 2 2 2 . . . . 
        . . . . f 2 c 2 2 2 2 2 . . . . 
        . . . . f c 2 2 c . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.inanimate)
    if (levelOneComplete == 1) {
        tiles.placeOnTile(completionOne, tiles.getTileLocation(18, 13))
        completionOne.say("Completed!")
    } else {
        tiles.placeOnTile(completionOne, tiles.getTileLocation(0, 0))
    }
    if (levelTwoComplete == 1) {
        tiles.placeOnTile(completionTwo, tiles.getTileLocation(27, 13))
        completionTwo.say("Completed!")
    } else {
        tiles.placeOnTile(completionTwo, tiles.getTileLocation(0, 0))
    }
    if (levelThreeComplete == 1) {
        tiles.placeOnTile(completionThree, tiles.getTileLocation(36, 13))
        completionThree.say("Completed!")
    } else {
        tiles.placeOnTile(completionThree, tiles.getTileLocation(0, 0))
    }
}
function levelTwo () {
    info.setLife(5)
    levelSelector = 2
    chestOpen = 0
    chest.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 5 5 4 4 4 4 4 . . 
        . . c c c c c 5 5 c c c c c . . 
        . . c 4 e 4 e b b 4 e e c c . . 
        . . 4 e 4 e 4 e e e e 4 e e . . 
        . . e e 4 e e e e 4 e e e e . . 
        . . 4 e e e 4 e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . 4 e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        `)
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(13, 37))
    tiles.placeOnTile(transitionWall, tiles.getTileLocation(12, 35))
    tiles.placeOnTile(endingCar, tiles.getTileLocation(79, 33))
    if (enemySpawns == 0) {
        enemySpawn()
    }
    tiles.placeOnTile(enemyTemplate, tiles.getTileLocation(31, 26))
    tiles.placeOnTile(enemy1, tiles.getTileLocation(64, 31))
    tiles.placeOnTile(enemy2, tiles.getTileLocation(27, 32))
    tiles.placeOnTile(chest, tiles.getTileLocation(44, 26))
    resetFlag()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (jumpCounter == 1) {
        info.changeScoreBy(100)
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 . . . . . . . . . . . . . 
            . 2 2 . . . . . . . . . . . . . 
            . 2 2 . . . . . . . . . . . . . 
            . e e e e . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . f f 1 1 1 1 1 1 1 1 f f . . 
            . . f f f f f f f f f f f f . . 
            c c c . . . . . . . . . . c c c 
            `)
        pause(1000)
        otherSprite.destroy()
    } else if (jumpCounter == 0) {
        info.changeLifeBy(-1)
        info.changeScoreBy(-50)
        sprite.x += controller.dx() * 2
        pause(500)
    }
})
let optionThree: Sprite = null
let optionTwo: Sprite = null
let optionOne: Sprite = null
let completionThree: Sprite = null
let completionTwo: Sprite = null
let completionOne: Sprite = null
let menuConfirm = 0
let transitionState = 0
let menuSelect = 0
let menuScreen = 0
let enemy2: Sprite = null
let enemy1: Sprite = null
let enemyTemplate: Sprite = null
let endingCar: Sprite = null
let transitionWall: Sprite = null
let chest: Sprite = null
let chestOpen = 0
let levelSelector = 0
let thePlayer: Sprite = null
let enemySpawns = 0
let levelThreeComplete = 0
let levelTwoComplete = 0
let levelOneComplete = 0
let jumpCounter = 0
info.setScore(0)
jumpCounter = 0
levelOneComplete = 0
levelTwoComplete = 0
levelThreeComplete = 0
enemySpawns = 0
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccc
    cccccccccccccce1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111eccccccccccccccccc
    cccccccccccccce1411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111141111114111111111111111111141eccccccccccccccccc
    cccccccccccccce1111141111111111411111111111111111111111111111111111111111111111141111111111111111111114111111111111111111111411111111111411111eccccccccccccccccc
    cccccccccccccce1411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111114141eccccccccccccccccc
    cccccccccccccce1111111141111411111111111111111111111111114111111111111111411111111111111111141111111111111111111111111111111111114111141111111eccccccccccccccccc
    cccccccccccccce1111111111111111111111111111111111111111111111114111111111111111111111111111111111111111111111111111111111111111111111111111111eccccccccccccccccc
    cccccccccccccce1111111111ffff111111111111111111111111111111111111111111111111111111111111111ffffffffff1111fffffffff1111111ffff1111111111111111eccccccccccccccccc
    cccccccccccccce41111111ffffffff1111111fffffffffff11111111111111111fffffff1111111111111111111ffffffffff1111fffffffff111111ffffff11fff11ffff1111eccccccccccccccccc
    cccccccccccccce1111111ffffffffff11111ffffffffffff11111ffffffff111fffffffff111111111111111111ffffffffff1111fffffffff11111fffffff11fff11ffff1111eccccccccccccccccc
    cccccccccccccce111111ffffffffffff1111fffffffffffff111fffffffff111ffffffffff11111111ffff11111111fff11111111111fff1111111ffffffff1fffff1ffff1111eccccccccccccccccc
    cccccccccccccce111111fffff11fffff1111fff1111114fff111fffffffff111ffff11ffff111111fffffff1111111fff11111111111fff111111fffff1fff1fffff11fff1111eccccccccccccccccc
    cccccccccccccce11111fffff1111fffff111fff1111111fff111ffff11111111fff141ffff11111fffffffff111111fff11111111111fff111111fffff1fff1fffff1ffff1111eccccccccccccccccc
    cccccccccccccce11111ffff111111ffff111fff1111111fff111fff111411111fff11fffff11111fffffffff111111fff11111111111fff111411ffff11fff1ffffffffff1111eccccccccccccccccc
    cccccccccccccce11111fff1111111ffff111fff4111111fff111fff111111111fff1ffffff11111ffff1ffff111141fff11114111111fff111111fff141fff1fffffffff11111eccecccccccccccccc
    cccccccccccccce11111fff11141111fff111fff1111111fff11fffffffff1111fffffffff111111fff111fff111111fff11111111111fff111111fff111fff1fffffffff11111eccccccecccccccccc
    cccccccccccccee14111fff41111111fff111fff111111ffff11fffffffff111fffffffff1111111fff141fff111111fff11111111111fff111111fff111fff1fffffffff11111eccccccccccccccccc
    cccccccccccccce11111fff1111111ffff111fffff11ffffff11fffffffff111ffffffff11111111fff111fff111111fff11111111111fff111111fff11ffff1fffffffff11111eeeecccccccecccccc
    cccccccccccccce11111fff1111111ffff111fffffffffffff11fff111111111fffffffff111111ffff111fff111111fff11111111111fff111111fff11ffff1fffffffff11111eeceeeeccccccccccc
    cccccccceccecce11111fff1111111ffff111ffffffffffff111fff111111111ffffffffff11111ffffffffff111111fff11111111111fff111111fffffffff1fff1fffff11111eeeeececeeccccecce
    ccccceccccceeee11111ffff11111ffff1111fffffffff11111ffff111111111ffff1ffffff1111ffffffffff111111fff11111111111fff111111ffffffff11fff1fffff11111eeeeeeeeeceeececcc
    ecccccceeeeecee11111fffff111fffff111ffff11111111111ffff111111111ffff111fffff111ffffffffff111111fff11111111fffffffff111ffffffff11fff11ffff11111eeeeeeeeeeeeeeeeee
    cccceeeeeeceeee11111fffffffffffff111ffff11111111111fffffffffff11ffff1111fffff11fff1111fff111111fff11111111fffffffff1111ffffff111fff11ffff11111eeeeeeeeeeeeeeeeee
    cceeeeeceeeeeee111111fffffffffff1111ffff11111111111fffffffffff111fff11111ffff11fff1111fff111111fff11111111fffffffff1111111111111fff11111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee1111111fffffffff11111fff111111111111fffffffffff111fff11111ffff11fff1111fff11111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eceeceeeeeeeeee111111111111111111111fff111111111111fffff111111111fff111111fff111111111fff11111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee111111111111111111111fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111e11111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee1111111111111111111111111111111111111e1111111e1111111111e11111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee1111111e1111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee111111111111111111111111e1111111111ff1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111e11111eeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeee1111111111111111111111111111111111f111f111111111111111111111111111f1111111111111111111111111111111111111e1111111e111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee111111111111111111111111111111111111f111f111111111111111111111111111f11111111111111111111111111111111111111111111111111111111e1eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee11111111111111111111111111111111111f1111f11111111111111111111111111f11111111111fff11111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee1e11e111111111e11111111111111111111ffffff111ffff1111ff1111111111111f11111111111f1f11ff111fffff11111111111111111111111111111e1e1eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee11111111111111111111111111111111111f1111f11ff11f1ffffff11ff11ff1111f111f11f111f11f1ff1111f111f111111111111111111111111111111111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee111e11111111111111111e1111111e1111f1111f11f11ff1f1111f1ff111f11f11f111f1ff11f111f11ff111fffff111111111111111111e1111111111ee1eeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee11e1111e11111111111111111111111111f1111f11ff1f11fff1ff1f1111f1ff11f111ffff11ffff1f11f111f11111111111e1111111111111111111e11111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee1e1e1e11111111111111111111111111111f1111f11ffff1111fff11ffff1fff1111111ffff11f1111ffff111fff11111111111111111111111111111111e1eeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee111111e1111e1111e11111111111111111111111111f111111e1111e1111111e111111f11f11ff1111111111111111e111111111111111111111111e1e11111eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee1e1e11e1e111111111111111111111111111111111f11111111111111111111111111ffff11f11111e11111e111111111111111111111e11111e111111e1e1eeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee1e111eee11e11ee1ee1e11e11111111111111111e11f1111e11111e11111e1111111111ff111111111111e11e111111111111111111e11e1e11e11e1eee111eeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeee4eeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eee4eeee4eeee4eeeeee4eeeee4eee4eeeeee4eee4eee4eeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeee4eeeeeeeeeeee4eeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444e444e444444eeeeeeee4eeeee4eee4eeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eee4eeeee4eeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeee44e44444e444444e444e444444444444444e4444444e44444444eeeeeeeeeee4eeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeee4444444444e444444444444e444e44444444e4444444444444444444444444e44444444444444444444444444444444444444eee4ee
    eeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeee444e444444e44444e44444e4444e44444e44e4444444444444e444444444444444444444444444444444444444444444444444444444e4444e44444444eee
    eeeeeeeeeeeeeeeeee4eeeee44444e44e44444444e44444e444e444444444444444ee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    eeeeeeeeeeeeeeeeee4444e444e4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    eee4ee4eee4e444e444e4444444444444e444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    eeeeeee444e44444444444444444e444444444444444444444444444e44444444e4444444444e44444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ee444e44e444444444e444444e44444444444e44444e44444e44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444e4444e444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4e44e44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `)
game.showLongText("Try to reach the escape van at the end of each level!", DialogLayout.Bottom)
game.showLongText("Stomp on enemies and open chests for poirnts", DialogLayout.Bottom)
thePlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f f . . 
    . . . . . f f f f f f f f f . . 
    . . . . . f f f f f f f f f . . 
    . . . . f f f 1 1 1 1 1 1 1 f . 
    . . . . f f f 1 1 1 1 1 1 1 f . 
    . . . . f f f 1 1 1 f 1 1 1 f . 
    . . . . f f f f f f f f f f f . 
    . . . . . f f 1 1 1 1 f f f . . 
    . . . . . f f 1 1 1 1 f f f . . 
    . . . . . 1 1 f f 1 . . . . . . 
    . . f f f 1 1 1 1 1 . f f f f . 
    . . f f f 1 1 1 1 1 . f f f f . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . f f f f . f f f f f . . . 
    . . . f f f f . f f f f f . . . 
    `, SpriteKind.Player)
thePlayer.setImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
menuScreen2()
game.onUpdate(function () {
    if (menuScreen == 1) {
        if (menuConfirm == 0) {
            if (menuSelect < 1) {
                menuSelect = 1
            }
            if (menuSelect > 3) {
                menuSelect = 3
            }
            if (menuSelect == 1) {
                optionOne.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
                optionTwo.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 1 1 1 1 . . . . . . . 
                    . . . 1 1 . . . . 1 1 . . . . . 
                    . . . 1 . . . . . . . 1 . . . . 
                    . . . . . . . . . . . . 1 . . . 
                    . . . . . . . . . . . . 1 . . . 
                    . . . . . . . . . . . . 1 . . . 
                    . . . . . . . . . . . 1 . . . . 
                    . . . . . . . . . . 1 . . . . . 
                    . . . . . . . . . . 1 . . . . . 
                    . . . . . . . . . 1 . . . . . . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 . . . . . . . . 
                    . . . . . 1 1 . . . . . . . . . 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                    `)
            }
            if (menuSelect == 2) {
                optionOne.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
                optionTwo.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . . . . 
                    . . . 5 5 . . . . 5 5 . . . . . 
                    . . . 5 . . . . . . . 5 . . . . 
                    . . . . . . . . . . . . 5 . . . 
                    . . . . . . . . . . . . 5 . . . 
                    . . . . . . . . . . . . 5 . . . 
                    . . . . . . . . . . . 5 . . . . 
                    . . . . . . . . . . 5 . . . . . 
                    . . . . . . . . . . 5 . . . . . 
                    . . . . . . . . . 5 . . . . . . 
                    . . . . . . . . 5 . . . . . . . 
                    . . . . . . 5 5 . . . . . . . . 
                    . . . . . 5 5 . . . . . . . . . 
                    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                    `)
            }
        }
        if (menuConfirm == 1) {
            if (menuSelect == 1) {
                menuScreen = 0
                initializeGame()
                levelOne()
                optionOne.destroy()
                optionTwo.destroy()
                optionThree.destroy()
            }
            if (menuSelect == 2) {
                menuSelect = 0
                initializeGame()
                hubWorld()
                optionOne.destroy()
                optionTwo.destroy()
                optionThree.destroy()
            }
            if (menuSelect == 3) {
                optionOne.destroy()
                optionTwo.destroy()
                optionThree.destroy()
            }
        }
    }
    if (menuScreen == 0) {
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            jumpCounter = 0
        }
    }
})
forever(function () {
    gravityOnWorld()
    console.log(levelSelector)
    gameWin()
})
