import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./Pages/Home/Home";
import Next from "./Pages/Next/Next";
import Header from "./Components/Header/Header";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<Next />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
