basic.forever(function () {
    basic.showString("Este micro-bit es de Lorenzo Arago")
})
basic.forever(function () {
    music.play(music.stringPlayable("C - C C5 - C5 C - ", 357), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C C5 - C5 C - C C5 ", 357), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- C5 C - C C5 - C5 ", 357), music.PlaybackMode.UntilDone)
})
