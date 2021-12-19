function setup() {
    createCanvas(800, 800)
    background("black")

    let n = 30
    let x0 = 400
    let y0 = 400
    let r1 = 100
    let r2 = 120
    let step = 2 * PI / n 

    fill("red")
    ellipse(x0, y0, 20)
    for (let t = 0; t < 2 * PI; t += step) {
        let x = x0 + r1 * cos(t)
        let y = y0 + r2 * sin(t)

        fill(getRandomColor())
        ellipse(x, y, 30, 30)
    }


}

function draw() {


}