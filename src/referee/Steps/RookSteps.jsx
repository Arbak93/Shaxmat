import { samePosition } from "../../Constants";
import { tileIseOccupied,tilesIsEmptyOrOccupiedByOpponent } from "./GeneralSteps";
export const Rook=(initialPosition, desiredPosition, boardState, type, team)=> {

    if (desiredPosition.x === initialPosition.x) {
        // console.log('ok')
        for (let i = 1; i < 8; i++) {
            let setchik = (desiredPosition.y < initialPosition.y) ? -1 : 1
            let passedPosition = { x: initialPosition.x, y: initialPosition.y + (i * setchik) }
            if ( samePosition(passedPosition,desiredPosition) ) {
                if (tilesIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true
                }
            } else {
                if (tileIseOccupied(passedPosition, boardState)) {
                    break
                }
            }
        }
    }
    if (initialPosition.y === desiredPosition.y) {
        for (let i = 1; i < 8; i++) {
            let setchik = (desiredPosition.x < initialPosition.x) ? -1 : 1
            let passedPosition = { x: initialPosition.x + (i * setchik), y: initialPosition.y }
            if (samePosition(passedPosition,desiredPosition)) {
                if (tilesIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true
                }

            } else {
                if (tileIseOccupied(passedPosition, boardState)) {
                    break
                }
            }

        }
    }
    return false
}