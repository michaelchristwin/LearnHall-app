import Home from "./Pages/Home";
import Booking from "./Pages/BookSession";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/book-session" element={<Booking />} />
      </Routes>
    </main>
  );
}

export default App;
