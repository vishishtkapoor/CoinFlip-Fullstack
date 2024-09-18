// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import History from './screens/history';
import Leaderboard from './screens/leaderboard';
import Create from './screens/Create';
import GameDetails from './screens/GameDetails'; // Import GameDetails component
import NavBar from './components/Nav'; // Assuming NavBar is in components folder
import './App.css'; // Make sure styles are applied properly

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes for different screens */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/create" element={<Create />} />
          <Route path="/game/:gameId" element={<GameDetails />} /> {/* Route for GameDetails */}
        </Routes>

        {/* Navigation Bar */}
        <NavBar />
      </div>
    </Router>
  );
}

export default App;



