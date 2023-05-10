
export const HORIZONTAL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
export var VERTICAL = ['1', '2', '3', '4', '5', '6', '7', '8']
export const GRID_SIZE =70;

export function samePosition(p1,p2){
return p1.x===p2.x&&p1.y===p2.y
}
var col=JSON.parse( localStorage.getItem('col'))

export const TeamType = {
    OPPONENT: col===true?'OUR':'OPPONENT',
    OUR: col===true?'OPPONENT':'OUR'
}
export const enPassant = undefined;

export const PieceType = {
    PAWN: 'PAWN',
    ROOK: 'ROOK',
    KNIGHT: 'KNIGHT',
    BISHOP: 'BISHOP',
    QUEEN: 'QUEEN',
    KING: 'KING'
}


var color=(col===true)?'w':'b'
var color1=(col===true)?'b':'w'

export const initialBoardState = [
{
    image: `assets/images/rook_${color}.png`,
    position:{
     x: 0, 
     y:7,
    }, 
     type:PieceType.ROOK, 
     team:TeamType.OPPONENT
},
{
    image: `assets/images/knight_${color}.png`,
    position:{
        x: 1, 
        y:7,
       }, 
     type:PieceType.KNIGHT, 
     team:TeamType.OPPONENT
},
{
    image: `assets/images/bishop_${color}.png`,
    position:{
        x: 2, 
        y:7,
       }, 
     type:PieceType.BISHOP, 
     team:TeamType.OPPONENT
},
{
    image: `assets/images/queen_${color}.png`,
    position:{
        x: 3, 
        y:7,
       }, 
     type:PieceType.QUEEN, 
     team:TeamType.OPPONENT
},
{
    image: `assets/images/king_${color}.png`,
    position:{
        x: 4, 
        y:7,
       }, 
     type:PieceType.KING, 
     team:TeamType.OPPONENT
},
{
    image: `assets/images/bishop_${color}.png`,
    position:{
        x: 5, 
        y:7,
       }, 
     type:PieceType.BISHOP, 
     team:TeamType.OPPONENT
},
{
    image: `assets/images/knight_${color}.png`,
    position:{
        x: 6, 
        y:7,
       }, 
     type:PieceType.KNIGHT, 
     team:TeamType.OPPONENT
},
{
    image: `assets/images/rook_${color}.png`,
    position:{
        x: 7, 
        y:7,
       },
     type:PieceType.ROOK, 
     team:TeamType.OPPONENT
},
{
    image: `assets/images/pawn_${color}.png`,
    position:{
        x: 0, 
        y:6,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OPPONENT,
     enPassant: enPassant 

},
{
    image: `assets/images/pawn_${color}.png`,
    position:{
        x: 1, 
        y:6,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OPPONENT,
     enPassant: enPassant ,

},
{
    image: `assets/images/pawn_${color}.png`,
    position:{
        x: 2, 
        y:6,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OPPONENT,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color}.png`,
    position:{
        x: 3, 
        y:6,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OPPONENT,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color}.png`,
    position:{
        x: 4, 
        y:6,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OPPONENT,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color}.png`,
    position:{
        x: 5, 
        y:6,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OPPONENT,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color}.png`,
    position:{
        x: 6, 
        y:6,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OPPONENT,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color}.png`,
    position:{
        x: 7, 
        y:6,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OPPONENT,
     enPassant: enPassant 
},
/////////
{
    image: `assets/images/rook_${color1}.png`,
    position:{
        x: 0, 
        y:0,
       },
     type:PieceType.ROOK, 
     team:TeamType.OUR
},
{
    image: `assets/images/knight_${color1}.png`,
    position:{
        x: 1, 
        y:0,
       }, 
     type:PieceType.KNIGHT, 
     team:TeamType.OUR
},
{
    image: `assets/images/bishop_${color1}.png`,
    position:{
        x: 2, 
        y:0,
       },
     type:PieceType.BISHOP, 
     team:TeamType.OUR
},
{
    image: `assets/images/queen_${color1}.png`,
    position:{
        x: 3, 
        y:0,
       }, 
     type:PieceType.QUEEN, 
     team:TeamType.OUR
},
{
    image: `assets/images/king_${color1}.png`,
    position:{
        x: 4, 
        y:0,
       }, 
     type:PieceType.KING, 
     team:TeamType.OUR
},
{
    image: `assets/images/bishop_${color1}.png`,
    position:{
        x: 5, 
        y:0,
       }, 
     type:PieceType.BISHOP, 
     team:TeamType.OUR
},
{
    image: `assets/images/knight_${color1}.png`,
    position:{
        x: 6, 
        y:0,
       }, 
     type:PieceType.KNIGHT, 
     team:TeamType.OUR
},
{ 
    image: `assets/images/rook_${color1}.png`,
    position:{
        x: 7, 
        y:0,
       }, 
     type:PieceType.ROOK, 
     team:TeamType.OUR
},
{
    image: `assets/images/pawn_${color1}.png`,
    position:{
        x: 0, 
        y:1,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OUR,
     enPassant: enPassant 

},
{
    image: `assets/images/pawn_${color1}.png`,
    position:{
        x: 1, 
        y:1,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OUR,
     enPassant: enPassant ,

},
{
    image: `assets/images/pawn_${color1}.png`,
    position:{
        x: 2, 
        y:1,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OUR,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color1}.png`,
    position:{
        x: 3, 
        y:1,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OUR,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color1}.png`,
    position:{
        x: 4, 
        y:1,
       },
     type:PieceType.PAWN, 
     team:TeamType.OUR,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color1}.png`,
    position:{
        x: 5, 
        y:1,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OUR,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color1}.png`,
    position:{
        x: 6, 
        y:1,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OUR,
     enPassant: enPassant 
},
{
    image: `assets/images/pawn_${color1}.png`,
    position:{
        x: 7, 
        y:1,
       }, 
     type:PieceType.PAWN, 
     team:TeamType.OUR,
     enPassant: enPassant 
},


]
