// phases imports
import {holesPositioning} from './phase/holesPositioning.game'
import {wallsPositioning} from './phase/wallsPositioning.game'
import {pawnsPositioning} from './phase/pawnsPositioning.game'
import {playing} 					from './phase/playing.game'

let game = {
	holesPositioning: holesPositioning,
	wallsPositioning: wallsPositioning,
	pawnsPositioning: pawnsPositioning,
	playing: playing
}

export {game}