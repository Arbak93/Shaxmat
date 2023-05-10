import Chessboard from './components/board/Chessboard';
import './app.scss'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <Routes>
    <Route path="/" element={<Chessboard/>}/>

    </Routes>
    </div>
  );
}

export default App;
