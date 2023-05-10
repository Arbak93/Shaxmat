import { React, useRef, useState, useEffect } from 'react'
import './Chessboard.scss'
import Tile from '../tile/Tile';
import Referee from '../../referee/Referee';
import { HORIZONTAL, VERTICAL, TeamType, PieceType, enPassant, initialBoardState, GRID_SIZE, samePosition, } from '../../Constants';
export default function Chessboard() {
    const [activePiece, setActivePiece] = useState(null)
    const [promotionPawn, setPromotionPawn] = useState()
    const [grabPosition, setGrabPosition] = useState({ x: -1, y: -1 })
    const [pieces, setPieces] = useState(JSON.parse(localStorage.getItem('p')) || initialBoardState);
    const chessboardRef = useRef(null)
    const modalRef = useRef(null)
    const referee = new Referee()

    function grabPiece(e) {
       
        const element = e.target
        const chessboard = chessboardRef.current
        if ((element.className === ('chess-piece') && chessboard)) {
            const grabx = Math.floor((e.clientX - chessboard.offsetLeft) / GRID_SIZE)
            const graby = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 560) / GRID_SIZE))
            setGrabPosition({
                x: grabx,
                y: graby
            })
        
            const x = e.clientX - GRID_SIZE / 2
            const y = e.clientY - GRID_SIZE / 2
            element.style.position = 'absolute'
            element.style.left = `${x}px`
            element.style.top = `${y}px`
            setActivePiece(element)
        }
    }
  
    function movePiece(e) {

        const chessboard = chessboardRef.current
        if (activePiece && chessboard) {
            const minx = chessboard.offsetLeft - 25
            const miny = chessboard.offsetTop - 25
            const maxx = (chessboard.offsetLeft + chessboard.clientWidth) - 65
            const maxy = (chessboard.offsetTop + chessboard.clientHeight) - 65
            const x = e.clientX - 50
            const y = e.clientY - 50

            activePiece.style.position = 'absolute'

            if (x < minx) {

                activePiece.style.left = `${minx}px`
            } else if (x > maxx) {
                activePiece.style.left = `${maxx}px`
            } else {
                activePiece.style.left = `${x}px`
            }
            if (y < miny) {
                activePiece.style.top = `${miny}px`
            } else if (y > maxy) {
                activePiece.style.top = `${maxy}px`
            } else {
                activePiece.style.top = `${y}px`
            }

        }

    }

    const dropPiece = (e) => {
        const chessboard = chessboardRef.current
        if (activePiece && chessboard) {
            const x = Math.floor((e.clientX - chessboard.offsetLeft) / GRID_SIZE)
            const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 560) / GRID_SIZE))
            const currentPiece = pieces.find(p => samePosition(p.position, grabPosition))
            if (currentPiece) {
                const validMove = referee.isValidMove(grabPosition, { x, y }, currentPiece.type, currentPiece.team, pieces)
                const isEnPassantMove = referee.isEnPassantMove(grabPosition, { x, y }, pieces, currentPiece.type, currentPiece.team, enPassant)
                const pawnDirection = currentPiece.team === TeamType.OUR ? 1 : -1;

                if (isEnPassantMove) {
                    const updatedPieces = pieces.reduce((results, piece) => {
                        if (samePosition(piece.position, grabPosition)) {

                            piece.enPassant = false
                            piece.position.x = x;
                            piece.position.y = y;
                            // console.log(grabPosition,piece.position)
                            //console.log(y)
                            g.type = piece.type;
                            g.a = HORIZONTAL[x];
                            g.b = col ? VERTICALS[y] : VERTICAL[y]
                            g.team = piece.team
                            localStorage.setItem('g', JSON.stringify(g))
                            results.push(piece);
                        } else if (!samePosition(piece.position, { x, y: y - pawnDirection })) {
                            if (piece.type === PieceType.PAWN) {
                                piece.enPassant = false
                            }
                            results.push(piece);
                        }
                        return results
                    }, [])
                    setPieces(updatedPieces)

                } else if (validMove) {

                    const updatedPieces = pieces.reduce((results, piece) => {
                        if (samePosition(piece.position, grabPosition)) {
                            piece.enPassant = Math.abs(grabPosition.y - y) === 2 && piece.type === PieceType.PAWN
                            piece.position.x = x;
                            piece.position.y = y;
                            let promotionRow = (piece.team === TeamType.OUR) ? 7 : 0
                            if (y === promotionRow && piece.type === 'PAWN') {
                                modalRef.current.classList.remove('hidden')
                                setPromotionPawn(piece)
                            }
                            g.a = HORIZONTAL[x];
                            g.b = col ? VERTICALS[y] : VERTICAL[y]
                            g.type = piece.type;
                            g.team = piece.team
                            localStorage.setItem('g', JSON.stringify(g))
                            results.push(piece);
                        } else if (!(samePosition(piece.position, { x, y }))) {

                            if (piece.type === 'PAWN') {
                                piece.enPassant = false
                            }


                            results.push(piece);
                        }
                        return results;
                    }, []);
                    setPieces(updatedPieces)
                    // localStorage.setItem('p', JSON.stringify(pieces))
                } else {
                    activePiece.style.position = 'relative'
                    activePiece.style.removeProperty('top')
                    activePiece.style.removeProperty('left')
                }
            }
            setActivePiece(null)
        }
    }
    useEffect(() => {
        localStorage.setItem('p', JSON.stringify(pieces))
    }, [pieces]);

    const promotePawn = (PieceType) => {
        if (promotionPawn === undefined) {
            return;
        }
        const updatedPieces = pieces.reduce((result, piece) => {

            if (samePosition(piece.position, promotionPawn.position)) {
                let teamType = (piece.team === TeamType.OUR) ? 'w' : 'b'
                piece.type = PieceType
                let imag = ''
                switch (PieceType) {
                    case 'ROOK': {
                        imag = 'rook'
                        break;
                    }
                    case 'BISHOP': {
                        imag = 'bishop';
                        break;
                    }
                    case 'KNIGHT': {
                        imag = 'knight';
                        break;
                    }
                    case "QUEEN": {
                        imag = 'queen';
                        break;
                    }
                    default:
                        break;
                }
                piece.image = `assets/images/${imag}_${teamType}.png`


            }

            result.push(piece)
            return result
        }, [])
        modalRef.current?.classList.add('hidden')
        setPieces(updatedPieces)

    }
    function promotionimgcolor() {

        return (promotionPawn?.team === TeamType.OUR) ? 'w' : 'b'
    }
    let board = [];
    for (let j = VERTICAL.length - 1; j >= 0; j--) {
        for (let i = 0; i < HORIZONTAL.length; i++) {
            const number = (i + j)
            const piece = pieces.find(p =>
                samePosition(p.position, { x: i, y: j }))
            let image = piece ? piece.image : undefined
           
          
            board.push(<Tile key={`${j},${i}`} number={number} image={image} />)
        }
    }
    var col = JSON.parse(localStorage.getItem('col')) //revers color fig  
    var VERTICALS = [8, 7, 6, 5, 4, 3, 2, 1]
    var g = {
        a: '',
        b: '',
        type: '',
        team: ''
    }
    const piec = JSON.parse(localStorage.getItem('pi'))
    const J = JSON.parse(localStorage.getItem('g'))
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
    return <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
       

        <div style={{ display: 'flex ', flexDirection: 'column', marginLeft:'50px'}}>
            <div style={{ display: 'flex', backgroundColor: 'green', padding: '5px', justifyContent: 'center', color: 'blanchedalmond' }}>  {HORIZONTAL.map((p) => <div key={p} style={{ width: '70px', textAlign: 'center', fontSize: '18px', fontWeight: '700' }}>{p}</div>)}</div>

            <div style={{ display: 'flex ' }}>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'green', padding: '10px', color: 'blanchedalmond' }}>
                    {(col ? VERTICAL : VERTICALS).map((p) => <div key={p} style={{ height: '67px', lineHeight: '70px', fontSize: '20px', fontWeight: '700', }}>{p}
                    </div>)
                    }
                </div>
                <div
                    ref={chessboardRef}
                    onMouseUp={(e => dropPiece(e))}
                    onMouseMove={e => movePiece(e)}
                    onMouseDown={e => grabPiece(e)}
                    className={'chessboard'} >
                    {board}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'green', padding: '10px', color: 'blanchedalmond' }}>
                    {
                        (col ? VERTICAL : VERTICALS).map((p) => <div key={p} style={{ height: '67px', lineHeight: '70px', fontSize: '20px', fontWeight: '700' }}>{p}</div>)

                    }

                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: 'green', padding: '5px', color: 'blanchedalmond', justifyContent: 'center' }}>  {HORIZONTAL.map((p) => <div key={p} style={{ width: '70px', textAlign: 'center', fontSize: '18px', fontWeight: '900', }}>{p}</div>)}</div>
        </div>
        <div id='pawn-promotion-modal ' className='hidden' ref={modalRef}>
            <div className='modal-body'>
                <img onClick={() => promotePawn(PieceType.ROOK)} src={`/assets/images/rook_${promotionimgcolor()}.png`} alt='rook' />
                <img onClick={() => promotePawn(PieceType.BISHOP)} src={`/assets/images/bishop_${promotionimgcolor()}.png`} alt='bishop' />
                <img onClick={() => promotePawn(PieceType.KNIGHT)} src={`/assets/images/knight_${promotionimgcolor()}.png`} alt='knight' />
                <img onClick={() => promotePawn(PieceType.QUEEN)} src={`/assets/images/queen_${promotionimgcolor()}.png`} alt='queen' />
            </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'rgb(85, 16, 16)', borderRadius: '20px' ,marginRight:"50px"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '296px', flexWrap: 'wrap', width: '550px' }}>
                {
                    piec ? piec.map((el, id) => el ? el.team === 'OUR' ? <div key={id} style={{ backgroundImage: `url(${el ? el.team === 'OUR' ? el.image || el : null : null})`, width: "70px", height: '70px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}></div> : null : null) : ''
                }
            </div>
            <div style={{ display: 'flex', height: '40px' }}>

                {J ? <button className='reversnull'>Revers</button> :
                    <button onClick={() => {

                        localStorage.clear()

                        localStorage.setItem('col', true)
                        window.location.reload()

                    }}
                        style={{ cursor: 'pointer', marginTop: '2px', height: '34px' }}
                        className='revers'
                    > Revers
                    </button>
                }
                <button
                    className='newgame'
                    onClick={() => {
                        localStorage.clear()
                        window.location.reload();
                    }}
                    style={{ cursor: 'pointer', marginTop: '2px', height: '34px', }}
                > New Game
                </button>
                <div style={{ height: '40px', marginLeft: '30px', marginTop: '2px', }}><div style={{ display: 'flex', width: '200px' }}> <div className={J ? J.team === 'OUR' ? 'white' : 'black' : 'black'} style={{ marginRight: '50px', fontWeight: '900', fontSize: '27px', }}>{J ? J.type : ''}</div>   <br></br><div className={J ? J.team === 'OUR' ? 'white' : 'black' : ''} style={{ height: '40px', fontWeight: '700', fontSize: '24px' }}> {(J ? J.a : '') + '   ' + (J ? J.b : '')}</div> </div></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '296px', flexWrap: 'wrap', width: '550px' }}>
                {
                    piec ? piec.map((el, id) => el ? el.team === 'OPPONENT' ? <div key={id} style={{ backgroundImage: `url(${el ? el.team === 'OPPONENT' ? el.image : null : null})`, width: "70px", height: '70px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}></div> : null : null) : ''
                }
            </div>
        </div>
    </div>
}

