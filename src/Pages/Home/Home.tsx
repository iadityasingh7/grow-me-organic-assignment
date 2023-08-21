import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI widgets
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

// css
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    formDataSet: false,
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setUserData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("user_data", JSON.stringify(userData));
  };

  const naviagateToSecondPage = () => {
    navigate("/next");
  };

  const saveDataAndNavigateToNextPage = () => {
    if (validateFormData(userData)
    ) {
      handleSaveToLocalStorage();
      naviagateToSecondPage();
    } else {
      alert("Please fill the form");

    }
  };

  function validateFormData(userData: any) {
    return (userData?.Name &&
    userData.Name.length > 0 &&
    userData?.Phone &&
    userData.Phone.length > 0 &&
    userData?.Email &&
    userData.Email.length > 0)
  }

  return (
    <>
      <h1 className="home-h1">First Page</h1>
      <Box
        className="home-Box"
        component="form"
        sx={{
          "& > :not(style)": { m: 5, width: "90ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="Name"
          label="Name"
          variant="outlined"
          type="text"
          value={userData.Name}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-basic"
          name="Phone"
          label="Phone number"
          variant="outlined"
          type="number"
          value={userData.Phone}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-basic"
          name="Email"
          label="Email"
          variant="outlined"
          type="email"
          value={userData.Email}
          onChange={handleChange}
          required
        />
      </Box>

      <Stack spacing={2} direction="row" marginLeft={5}>
        <Button variant="contained" onClick={saveDataAndNavigateToNextPage}>
          Submit
        </Button>
      </Stack>
    </>
  );
}

export default Home;
