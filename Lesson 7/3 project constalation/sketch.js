let w = window.innerWidth
let h = window.innerHeight
let xs = []
let ys = []
let xsM = []
let ysM = []
let count = 150
let linesCount = 25
let maxDist = 60
let padding = 50

function setup() {
    createCanvas(w, h)
    background("black")
    xs = getRandomArray(count, padding, w-padding)
    ys = getRandomArray(count, padding, h-padding)
    
    xsM = getRandomArray(count*5, 0, w)
    ysM = getRandomArray(count*5, 0, h)

}

function draw() {
    background("black")
    stroke("white")
    for(let i=0; i<xs.length; i++){
        ellipse(xs[i], ys[i], random(1,8))
    }

    for(let i=0; i<xsM.length; i++){
        ellipse(xsM[i]+sin(frameCount/100)*10, ysM[i], random(1,2))
        /*
        xsM[i]++
        ysM[i]--
        if(xsM[i]>w){
            xsM[i]=0
        }
        if(ysM[i]<0){
            ysM[i]=h
        }
        */
    }

    for(let i=0; i<xs.length; i++){
        for(let j=1; j<xs.length; j++){
            if(dist(xs[i],ys[i], xs[j],ys[j])<maxDist){
                line(xs[i],ys[i], xs[j],ys[j])
            }
        }
    }

    //noLoop()
}


function getRandomArray(count, min, max){
    let arr = []
    for(let i=0; i<count; i++){
        arr.push(int(random(min, max)))
    }
    return arr;
}