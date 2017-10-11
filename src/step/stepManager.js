// import globals data
import * as gd from './../globalData'

// pages imports
import {menu} from './page/menu.page'
import {game} from './page/game.page'

let stepManager = {
	currentStep: stepManager.pages.menu.main
	pages: {
		menu: menu,
		game: game
	}
}

export {stepManager}