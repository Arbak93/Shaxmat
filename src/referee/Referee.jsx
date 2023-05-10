
import { PieceType, TeamType } from "../Constants";
import { pi } from './Steps/GeneralSteps';
import { Pawn, Knight, Bishop, Rook, Queen, King,  } from "./Steps/Imports"
export default class Referee {

    isEnPassantMove(initialPosition, desiredPosition, boardState, type, team,) {  //harvac
        const pawnDirection = team === TeamType.OUR ? 1 : -1;
        if (type === PieceType.PAWN) {
            if ((desiredPosition.x - initialPosition.x === -1 || desiredPosition.x - initialPosition.x === 1) && desiredPosition.y - initialPosition.y === pawnDirection) {
                let piece = boardState.find(p => p.position.x === desiredPosition.x && p.position.y === desiredPosition.y - pawnDirection && p.enPassant)

                if (piece) {
                    console.log(piece)
                    pi.push(piece)
                    localStorage.setItem('pi', JSON.stringify(pi))
                    return true
                }
            }
        }

        return false
    }
    isValidMove(initialPosition, desiredPosition, type, team, boardState) {
        let validMove = false
        switch (type) {
            case PieceType.PAWN:
                validMove = Pawn(initialPosition, desiredPosition, boardState, type, team,)
                break;
            case PieceType.KNIGHT:
                validMove = Knight(initialPosition, desiredPosition, boardState, type, team,)
                break;
            case PieceType.BISHOP:
                validMove = Bishop(initialPosition, desiredPosition, boardState, type, team,)
                break;
            case PieceType.ROOK:
                validMove = Rook(initialPosition, desiredPosition, boardState, type, team,)
                break;
            case PieceType.QUEEN:
                validMove = Queen(initialPosition, desiredPosition, boardState, type, team,)
                break;
            case PieceType.KING:
                validMove = King(initialPosition, desiredPosition, boardState, type, team,)

                break;
            default:
                break;
        }
        return validMove;
    }
    
}