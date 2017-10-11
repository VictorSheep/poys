import Box from './../class/Box.class'

let b0 = new Box( {x: .9, y: .9, z: .9}, {x: 0, y: 0, z: 0}, 0xcc4444, 'red' ) // red x
let b1 = new Box( {x: .9, y: .9, z: .9}, {x: 0, y: 1, z: 0}, 0x44cc44, 'green' ) // green y
let b2 = new Box( {x: .9, y: .9, z: .9}, {x: 1, y: 1, z: 0}, 0x4444cc, 'blue' ) // blue z

let boxInst = [b0, b1, b2]

for (let i = 0; i < boxInst.length; ++i) {
	boxInst[i].addScene()
}

export {boxInst}