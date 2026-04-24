import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;