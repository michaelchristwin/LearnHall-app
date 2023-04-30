import Home from "./Pages/Home";
import Booking from "./Pages/BookSession";
import { Route, Routes } from "react-router-dom";
import NewTutor from "./Pages/NewTutor";
import Faqs from "./Pages/FAQs";
import BaseUrl from "./JSX/BaseUrl";

function App() {
  return (
    <main>
      <Routes>
        <Route path={BaseUrl} element={<Home />} />
        <Route path={`${BaseUrl}/book-session`} element={<Booking />} />
        <Route path={`${BaseUrl}/become-tutor`} element={<NewTutor />} />
        <Route path={`${BaseUrl}/faqs`} element={<Faqs />} />
      </Routes>
    </main>
  );
}

export default App;
