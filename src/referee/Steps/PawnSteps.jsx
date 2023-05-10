import { TeamType } from "../../Constants";
import { tileIseOccupied,TileIseOccupiedByOpponent } from "./GeneralSteps";
export const Pawn =(initialPosition, desiredPosition, boardState,type, team,)=> {
    const specialRow = (team === TeamType.OUR) ? 1 : 6;
    const pawnDirection = (team === TeamType.OUR) ? 1 : -1
    if (initialPosition.x === desiredPosition.x && initialPosition.y === specialRow && desiredPosition.y - initialPosition.y === 2 * pawnDirection) {
        if (!tileIseOccupied(
            desiredPosition,
            boardState
        ) &&
            !tileIseOccupied(
                {
                    x: desiredPosition.x,
                    y: desiredPosition.y - pawnDirection
                }
                , boardState)
        ) {
           // console.log(team)
            return true
        }

    } else if (initialPosition.x === desiredPosition.x && desiredPosition.y - initialPosition.y === pawnDirection) {
        if (!tileIseOccupied(desiredPosition, boardState)) {
            return true
        }
    }
    else if (desiredPosition.x - initialPosition.x === -1 && desiredPosition.y - initialPosition.y === pawnDirection) {

        //console.log('left')
        if (TileIseOccupiedByOpponent(desiredPosition, boardState, team)) {

            return true
        }

    } else if (desiredPosition.x - initialPosition.x === 1 && desiredPosition.y - initialPosition.y === pawnDirection) {

        // console.log('right')
        if (TileIseOccupiedByOpponent(desiredPosition, boardState, team)) {

            return true
        }
    }
    return false
}
