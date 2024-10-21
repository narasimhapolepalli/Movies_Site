import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import MovieDetails from "./Moviedetails";
import ActressDetails from "./Actressdetails";
import Action from "./Action";
import Comedy from "./Comedy";
import Drama from "./Drama";
import Horror from "./Horror";
import Romance from "./Romance";
import Watchlist from "./Watchlist"; 

function App() {
  return (
    <Router basename="/movie-recommendation">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/MovieDetails" element={<><Header /><MovieDetails /><Footer /></>} />
        <Route path="/Actressdetails" element={<><Header /><ActressDetails /><Footer /></>} />
        <Route path="/Watchlist" element={<><Header /><p>DataBase not connected</p><Footer /></>} /> 
        <Route path="/Action" element={<><Header /><Action /><Footer /></>} />
        <Route path="/Comedy" element={<><Header /><Comedy /><Footer /></>} />
        <Route path="/Drama" element={<><Header /><Drama /><Footer /></>} />
        <Route path="/Horror" element={<><Header /><Horror /><Footer /></>} />
        <Route path="/Romance" element={<><Header /><Romance /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
