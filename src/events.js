// root imports
import * as THREE from './three.min'
// three instances imports
import {raycaster} from './threeInstance/raycaster'
import {scene} 				from './threeInstance/scene'
import {camera} 			from './threeInstance/camera'

let mouse = new THREE.Vector2();
let intersects = [];

function onMouseClick( event ) {
	intersects = raycaster.intersectObjects( scene.children );
	if(intersects.length>0){
		if(intersects[0].object.parentInstance.mouseclickEvent) {
			intersects[0].object.parentInstance.mouseclickEvent();
		}
	}
}

function onMouseMove( event ) {
	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );
	// calculate objects intersecting the picking ray
	intersects = raycaster.intersectObjects( scene.children );
	if(intersects.length>0){
		if(intersects[0].object.parentInstance.mouseoverEvent) {
			intersects[0].object.parentInstance.mouseoverEvent();
		}
	}
}

window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener( 'click', onMouseClick, false );
