// import globals data
import * as gd from './globalData'
// root imports
import * as THREE from './three.min'
import * as events from './events'
// three instances imports
import {scene} 				from './threeInstance/scene'
import {camera} 			from './threeInstance/camera'
import {renderer} 		from './threeInstance/renderer'
import {ambiantLight} from './threeInstance/light'
// box
import {boxInst} 			from './instantiation/box.inst'

document.body.appendChild( renderer.domElement );

// game logic
let update = () => {
}

// draw scene
let render = () => {
	renderer.render( scene, camera );
}

// run the game loop
let gameLoop = () => {
	requestAnimationFrame( gameLoop );
	update()
	render()
}
gameLoop() // game is starting !

export { scene }