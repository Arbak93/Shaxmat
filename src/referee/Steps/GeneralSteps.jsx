import {samePosition} from "../../Constants";
export var pi = JSON.parse(localStorage.getItem('pi')) ? JSON.parse(localStorage.getItem('pi')) : []

export const tileIseOccupied=(position, boardState)=> {
    const piece = boardState.find((p) => samePosition(p.position, position))//(peshki mek@ miusi vrayov chtoxel@) jxtumov
    if (piece) {
        return true
    } else {
        return false
    }
}
export const TileIseOccupiedByOpponent=(position, boardState, team)=> {
    var piece = boardState.find((p) => samePosition(p.position, position) && p.team !== team) // qayl tanely f

    if (piece) {
        pi.push(piece)
        localStorage.setItem('pi', JSON.stringify(pi))
        // console.log(pi.image)
        return true
    } else {
        return false
    }
}
export const  tilesIsEmptyOrOccupiedByOpponent =(position, boardState, team) =>{

    return !tileIseOccupied(position, boardState) || TileIseOccupiedByOpponent(position, boardState, team)
}