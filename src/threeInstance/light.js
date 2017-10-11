import * as THREE 	from "./../three.min";
import {scene} 			from "./../threeInstance/scene";

// LIGHT
let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
scene.add(ambientLight);

let pointLight = new THREE.PointLight(0xddddff, 0.4, 20);
pointLight.position.set( 0, 1, 13 );
pointLight.castShadow = true;
scene.add(pointLight);

let pointLight2 = new THREE.PointLight(0xff3030, 0.8, 19);
pointLight2.position.set( -3, 12, 10 );
pointLight2.castShadow = true;
scene.add(pointLight2);

let pointLargeLight = new THREE.PointLight(0xffccdd, .9, 250);
pointLargeLight.position.set(-13, -14, 30);
pointLargeLight.castShadow = true;
scene.add(pointLargeLight);

let pointLargeLight2 = new THREE.PointLight(0xff3030, .8, 200);
pointLargeLight2.position.set( -1, 40, 14 );
pointLargeLight2.castShadow = true;
scene.add(pointLargeLight2);

let pointBottomLight2 = new THREE.PointLight(0xffffff, .2, 80);
pointBottomLight2.position.set( 10, 10, -40 );
pointBottomLight2.castShadow = true;
scene.add(pointBottomLight2);

export {ambientLight}