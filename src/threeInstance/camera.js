// root imports
import * as THREE from './../three.min'

// CAMERA
const aspect = window.innerWidth / window.innerHeight;
const d = 25;
let camera = new THREE.OrthographicCamera( -d * aspect, d * aspect, d, -d, .2, 1000 );
camera.position.set( 15, 15, 15 );
camera.rotation.order = 'YXZ';
camera.rotation.y = Math.PI / 4;
camera.rotation.x = Math.atan( - 1 / Math.sqrt( 2 ) );
camera.rotation.z = Math.PI / 1.5;

console.log('camera', camera)
export {camera}