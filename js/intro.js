const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let animationID
canvas.width = 500
canvas.height = 500

const animationLoop = () => {
    animationID = window.requestAnimationFrame(animationLoop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(10, 250, 20, 20)
}

animationLoop()