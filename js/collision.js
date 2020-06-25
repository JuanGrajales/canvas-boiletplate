// let canvas = document.querySelector('canvas')
//     canvas.width = 1000
//     canvas.height = 500
// let ctx = canvas.getContext('2d')
// let animationID
// let player = {
//     xPosition: 30,
//     yPosition: 200,
//     width: 20,
//     height: 20,
//     speed: 10
// }
// let obstacle = {
//     xPosition: 200,
//     yPosition: 200,
//     width: 50,
//     height: 50
// }

// // collision still has a bug when you are touching the square it doesn't move unless you make the square bounce off the rectangle
// const collision = (playerObj, obsOjb) => {
//     console.log(playerObj.xPosition + playerObj.width + playerObj.speed <= obsOjb.xPosition,   // right side of player collides with left side of obstacle
//         playerObj.xPosition - playerObj.speed >= obsOjb.xPosition + obsOjb.width,     // left side of player collides with right side of obstacle
//         playerObj.yPosition - playerObj.speed >= obsOjb.yPosition + obsOjb.height,    // top side of player collides with bottom side of obstacle
//         playerObj.yPosition + playerObj.height + playerObj.speed <= obsOjb.yPosition);

//     if(playerObj.xPosition + playerObj.width + playerObj.speed <= obsOjb.xPosition ||   // right side of player collides with left side of obstacle
//         playerObj.xPosition - playerObj.speed >= obsOjb.xPosition + obsOjb.width ||     // left side of player collides with right side of obstacle
//         playerObj.yPosition - playerObj.speed >= obsOjb.yPosition + obsOjb.height ||    // top side of player collides with bottom side of obstacle
//         playerObj.yPosition + playerObj.height + playerObj.speed <= obsOjb.yPosition){  // bottom side of player collides with top side of obstacle
//             return false
//     }
//     return true
// }

// const move = (e) => {
//     console.log(`move`);
//     // collision(player, obstacle)
//     switch(e.key){
//         case'ArrowRight':
//             // if(player.xPosition + player.width + player.speed <= obstacle.xPosition){
//             if(!collision(player, obstacle)){
//                 player.xPosition += player.speed
//             } else {
//                 player.xPosition -= player.speed * 2
//             }
//             break
//         case'ArrowLeft':
//             // if(player.xPosition - player.speed >= obstacle.xPosition + obstacle.width){
//             if(!collision(player, obstacle)){
//                 player.xPosition -= player.speed
//             } else {
//                 player.xPosition += player.speed * 2
//             }
//             break
//         case'ArrowUp':
//             // if(player.yPosition - player.speed >= obstacle.yPosition + obstacle.height){
//             if(!collision(player, obstacle)){
//                 player.yPosition -= player.speed
//             } else {
//                 player.yPosition += player.speed * 2
//             }
//             break
//         case'ArrowDown':
//             // if(player.yPosition + player.height + player.speed <= obstacle.yPosition){
//             if(!collision(player, obstacle)){
//                 player.yPosition += player.speed
//             } else {
//                 player.yPosition -= player.speed * 2
//             }
//             break
//     }
// }

// const animationLoop = () => {
//     animationID = window.requestAnimationFrame(animationLoop)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.fillRect(player.xPosition, player.yPosition, player.width, player.height)
//     ctx.fillRect(obstacle.xPosition, obstacle.yPosition, obstacle.width, obstacle.height)
// }

// document.onkeydown = move
// animationLoop()

let canvas = document.querySelector('canvas')
    canvas.width = 1000
    canvas.height = 500
let ctx = canvas.getContext('2d')
let animationID
let player = {
    xPosition: 30,
    yPosition: 200,
    width: 20,
    height: 20,
    speed: 10
}
let obstacle = {
    xPosition: 200,
    yPosition: 200,
    width: 50,
    height: 50
}

// collision still has a bug when you are touching the square it doesn't move unless you make the square bounce off the rectangle
// add another function that handles the bug of noCollision
const noCollision = (playerObj, obsOjb) => {
    console.log(playerObj.xPosition + playerObj.width + playerObj.speed <= obsOjb.xPosition,   // right side of player collides with left side of obstacle
        playerObj.xPosition - playerObj.speed >= obsOjb.xPosition + obsOjb.width,     // left side of player collides with right side of obstacle
        playerObj.yPosition - playerObj.speed >= obsOjb.yPosition + obsOjb.height,    // top side of player collides with bottom side of obstacle
        playerObj.yPosition + playerObj.height + playerObj.speed <= obsOjb.yPosition);

    if(playerObj.xPosition + playerObj.width + playerObj.speed <= obsOjb.xPosition ||   // right side of player collides with left side of obstacle
        playerObj.xPosition - playerObj.speed >= obsOjb.xPosition + obsOjb.width ||     // left side of player collides with right side of obstacle
        playerObj.yPosition - playerObj.speed >= obsOjb.yPosition + obsOjb.height ||    // top side of player collides with bottom side of obstacle
        playerObj.yPosition + playerObj.height + playerObj.speed <= obsOjb.yPosition){  // bottom side of player collides with top side of obstacle
            return true
    }
    return false
}

const move = (e) => {
    console.log(`move`);
    // noCollision(player, obstacle)
    switch(e.key){
        case'ArrowRight':
            // if(player.xPosition + player.width + player.speed <= obstacle.xPosition){
            if(noCollision(player, obstacle)){
                player.xPosition += player.speed
            } else {
                player.xPosition -= 0
            }
            break
        case'ArrowLeft':
            // if(player.xPosition - player.speed >= obstacle.xPosition + obstacle.width){
            if(noCollision(player, obstacle)){
                player.xPosition -= player.speed
            } else {
                player.xPosition += 0
            }
            break
        case'ArrowUp':
            // if(player.yPosition - player.speed >= obstacle.yPosition + obstacle.height){
            if(noCollision(player, obstacle)){
                player.yPosition -= player.speed
            } else {
                player.yPosition += 0
            }
            break
        case'ArrowDown':
            // if(player.yPosition + player.height + player.speed <= obstacle.yPosition){
            if(noCollision(player, obstacle)){
                player.yPosition += player.speed
            } else {
                player.yPosition -= 0
            }
            break
    }
}

const animationLoop = () => {
    animationID = window.requestAnimationFrame(animationLoop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(player.xPosition, player.yPosition, player.width, player.height)
    ctx.fillRect(obstacle.xPosition, obstacle.yPosition, obstacle.width, obstacle.height)
}

document.onkeydown = move
animationLoop()