let canvas = document.querySelector('canvas')
    canvas.width = 1000
    canvas.height = 500
let ctx = canvas.getContext('2d')
let animationID

const animationLoop = () => {
    animationID = window.requestAnimationFrame(animationLoop)
    ctx.fillRect(30, 200, 20, 20)
}

animationLoop()