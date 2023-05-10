import { samePosition } from "../../Constants"
import { tileIseOccupied, tilesIsEmptyOrOccupiedByOpponent } from "./GeneralSteps"

export const Queen=(initialPosition, desiredPosition, boardState, type, team)=> {
    for (let i = 1; i < 8; i++) {
        let setchikX =(desiredPosition.x < initialPosition.x)?-1:(desiredPosition.x > initialPosition.x)?1:0
        let setchikY =(desiredPosition.y < initialPosition.y)?-1:(desiredPosition.y > initialPosition.y)?1:0
        let passedPosition = { x: initialPosition.x + (i * setchikX), y: initialPosition.y + (i * setchikY) }
        if (samePosition(passedPosition, desiredPosition)) {             
            if (tilesIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                return true
            }
        } else {
            if (tileIseOccupied(passedPosition, boardState)) {
                break
            }
        }
    }
    return false;
}