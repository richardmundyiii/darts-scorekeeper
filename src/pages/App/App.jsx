import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import GamePage from "../GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
