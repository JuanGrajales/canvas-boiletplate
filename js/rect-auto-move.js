let canvas = document.querySelector('canvas')
    canvas.width = 1000
    canvas.height = 500
let ctx = canvas.getContext('2d')
let animationID
let rectX = 30

const animationLoop = () => {
    animationID = window.requestAnimationFrame(animationLoop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(rectX += 5, 200, 20, 20)
}

animationLoop()