import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import Game01 from "../../components/Game01/Game01";
import GameCricket from "../../components/Cricket/GameCricket/GameCricket";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/501" element={<Game01 />} />
        <Route path="/game/cricket" element={<GameCricket />} />
      </Routes>
    </div>
  );
}

export default App;
