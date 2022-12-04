import Home from "./Pages/Home";
import Booking from "./Pages/BookSession";
import { Route, Routes } from "react-router-dom";
import NewTutor from "./Pages/NewTutor";
import Faqs from "./Pages/FAQs";

function App() {
  return (
    <main>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/book-session" element={<Booking />} />
        <Route path="/become-tutor" element={<NewTutor />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </main>
  );
}

export default App;
