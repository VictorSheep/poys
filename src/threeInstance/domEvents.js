import {THREEx} 	from "./../threex.domevents";
import {camera}     from "./../threeInstance/camera";
import {renderer}   from "./../threeInstance/renderer";

var domEvents = new THREEx.DomEvents( camera, renderer.domElement );

export {domEvents};