import "./App.css";
import { Routes, Route } from "react-router-dom";
// Views
import Home from "./views/Home";
import Crew from "./views/Crew";
import Destination from "./views/Destination";
import Technology from "./views/Technology";
// Components
import Header from "./components/UI/Header/Header";
import DestinationDetail from "./components/Destination/DestinationDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destinations" element={<Destination />}>
          <Route path=":destinationName" element={<DestinationDetail />} />
        </Route>
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
