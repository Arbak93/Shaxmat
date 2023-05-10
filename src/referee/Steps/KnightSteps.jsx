
import {tilesIsEmptyOrOccupiedByOpponent} from "./GeneralSteps";

   
   export  const Knight =(initialPosition, desiredPosition, boardState, type, team,) =>{

        for (let i = -1; i < 2; i += 2) {
            for (let j = -1; j < 2; j += 2) {

                /// verev nerqev
                if (desiredPosition.y - initialPosition.y === 2 * i) {
                    if (desiredPosition.x - initialPosition.x === j) {
                        if (tilesIsEmptyOrOccupiedByOpponent(desiredPosition, boardState, team)) {
                            return true
                        }

                    }

                }
                /// aj dzax
                if (desiredPosition.x - initialPosition.x === 2 * i) {
                    if (desiredPosition.y - initialPosition.y === j) {
                        if (tilesIsEmptyOrOccupiedByOpponent(desiredPosition, boardState, team)) {
                            return true
                        }
                    }

                }
            }
        }
        return false
    }
