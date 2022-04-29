// React router
import { Routes, Route, useLocation } from "react-router-dom";
// Views
import Home from "./views/Home";
import Crew from "./views/Crew";
import Destination from "./views/Destination";
import Technology from "./views/Technology";
// Components
import Header from "./components/UI/Header/Header";
import DestinationDetail from "./components/Destination/DestinationDetail";
import CrewDetail from "./components/Crew/CrewDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.key} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />}>
            <Route path=":crewName" element={<CrewDetail />} />
          </Route>
          <Route path="/destinations" element={<Destination />}>
            <Route path=":destinationName" element={<DestinationDetail />} />
          </Route>
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
