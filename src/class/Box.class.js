// import globals data
import * as gd from './../globalData'
// root imports
import * as THREE from './../three.min'
// three instances imports
import {scene} from './../threeInstance/scene'
// class methods imports
import mouseoverEvent from './../class/box.mouseover'
import mouseclickEvent from './../class/box.mouseclick'

export default class {
	/**
	 * Box constructor
	 * @dim  {object} : dimentions {x, y, z}
	 * @pos  {object} : position {x, y, z}
	 */
	constructor( dim, pos, color = 0xffffff, name ) {
		// dimentions
		this.dim = dim
		// position
		this.pos = pos

		// mesh creation
		let geometry = new THREE.BoxGeometry( dim.x*gd.ratio, dim.y*gd.ratio, dim.z*gd.ratio );
    let material = new THREE.MeshPhongMaterial( { color: color } );
    let mesh = new THREE.Mesh( geometry, material )
    mesh.receiveShadow = true;
    mesh.castShadow = true
    mesh.position.x = pos.x * gd.ratio
    mesh.position.y = pos.y * gd.ratio
    mesh.position.z = pos.z * gd.ratio
    mesh.name = name
    this.mesh = mesh
    // add this in mesh to use instance of Box while mouse events
    this.mesh.parentInstance = this

    // dom events
    this.mouseoverEvent = mouseoverEvent
    this.mouseclickEvent = mouseclickEvent
	}
	/**
	 * add this.mesh to scene
	 */
	addScene(){
    scene.add( this.mesh )
  }
}