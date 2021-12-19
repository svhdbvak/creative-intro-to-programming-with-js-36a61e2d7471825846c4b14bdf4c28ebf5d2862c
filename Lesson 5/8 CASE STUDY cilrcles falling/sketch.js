let xS = [50, 20, 30, 100, 120, 300, 450, 600, 500, 650, 730, 830, 50]
let yS = [60, 100, 300, 150, 380, 150, 400, 100, 50, 300, 500, 50, 100]
let clr = []
let d = 25


function setup() {
    console.log(xS.length)
    createCanvas(1000, 800)
    background("black")
    for(let i=0; i<xS.length; i++){
        clr.push(getRandomColor())
    }

}

function draw() {

    //console.log(yS)
    yS = incimentArray(yS)
    //xS = incimentArray(xS)

    for (let i = 0; i < xS.length; i++) {
        fill(clr[i])
        ellipse(xS[i], yS[i], d)
        fill("black")
        text(i, xS[i], yS[i])
    }

    //noLoop()
}


function incimentArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]++
    }
    //console.log(arr)
    return arr;
}

function getRandomColor() {
    let r = int(random(0, 255))
    let g = int(random(0, 255))
    let b = int(random(0, 255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"
    return colo;

}