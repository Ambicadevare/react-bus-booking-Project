import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buses from "./pages/Buses";
import TrackBus from "./pages/TrackBus";
import Seats from "./pages/Seats";
import Payment from "./pages/Payment";
import History from "./pages/History";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/track/:id" element={<TrackBus />} />
        <Route path="/seats/:id" element={<Seats />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
