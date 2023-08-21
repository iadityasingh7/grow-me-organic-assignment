import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./Pages/Home/Home";
import Next from "./Pages/Next/Next";
import Header from "./Components/Header/Header";

function App() {
  let userData: any = null;
  const userDataJSON = localStorage.getItem("user_data");
  if (userDataJSON && userDataJSON.length > 1) {
    userData = JSON.parse(userDataJSON);
  }

  
  function validateFormData(userData: any) {
    return (userData?.Name &&
    userData.Name.length > 0 &&
    userData?.Phone &&
    userData.Phone.length > 0 &&
    userData?.Email &&
    userData.Email.length > 0)
  }

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {validateFormData(userData) && <Route path="/next" element={<Next />} />}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
