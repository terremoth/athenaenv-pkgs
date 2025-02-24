import { NineSlice } from "../nineslice.js"

let images = [
    new Image("assets/1.png"),
    new Image("assets/2.png"),
    new Image("assets/3.png"),
    new Image("assets/4.png"),
    new Image("assets/5.png"),
    new Image("assets/6.png"),
    new Image("assets/7.png"),
    new Image("assets/8.png"),
    new Image("assets/9.png")
]

let ui = new NineSlice(images)

while (true) {
    Screen.clear()

    ui.draw(10, 10, 100, 100)
    ui.draw(120, 10, 50, 200)
    ui.draw(10, 210, 400, 50)

    Screen.flip()
}