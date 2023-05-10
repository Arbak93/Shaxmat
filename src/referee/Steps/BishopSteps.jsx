import { samePosition } from "../../Constants";
 import { tileIseOccupied,tilesIsEmptyOrOccupiedByOpponent } from "./GeneralSteps";

export const Bishop=(initialPosition, desiredPosition, boardState, type, team) =>{

    for (let i = 1; i < 8; i++) {
        //up right
        if (desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {
            let passedPosition = { x: initialPosition.x + i, y: initialPosition.y + i }
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

        //bottom right
        if (desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {
            let passedPosition = { x: initialPosition.x + i, y: initialPosition.y - i }
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


        //bottom left
        if (desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {
            let passedPosition = { x: initialPosition.x - i, y: initialPosition.y - i }
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
        //top left
        if (desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {
            let passedPosition = { x: initialPosition.x - i, y: initialPosition.y + i }
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