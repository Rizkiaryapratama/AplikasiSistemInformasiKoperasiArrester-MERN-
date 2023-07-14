import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import {
  Box,
  Container,
  Button,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import bglogin from "../../asset/img/bglogin.jpg";
import bglogin2 from "../../asset/img/bglogin2.jpg";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://scary-tiara-wasp.cyclic.app/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          bgcolor: "white",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#3bb19b",
              backgroundImage: `url(${bglogin2})`,
              backgroundSize: "100%",
            }}
          >
            <h1 style={{ color: "black" }}>Welcome Back</h1>
            <Link to="/login">
              <Button
                type="button"
                variant="contained"
                sx={{
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  backgroundColor: "#071952",
                  borderRadius: "20px",
                  width: "180px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: "2",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#071952",
              backgroundImage: `url(${bglogin})`,
              backgroundSize: "100%",
            }}
          >
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <TextField
                fullWidth
                color="secondary"
                id="filled-textarea"
                label="Nama Depan"
                multiline
                variant="filled"
                type="text"
                placeholder="Input Nama Depan"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                fullWidth
                color="secondary"
                id="filled-textarea"
                label="Nama Belakang"
                multiline
                variant="filled"
                type="text"
                placeholder="Input Nama Belakang"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                fullWidth
                color="secondary"
                id="filled-textarea"
                label="Email"
                multiline
                variant="filled"
                type="email"
                placeholder="Input Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                sx={{ marginBottom: "20px" }}
              />
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  fullWidth
                  color="secondary"
                  placeholder="Input Password"
                  id="filled-adornment-password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {error && <div className={styles.error_msg}>{error}</div>}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  backgroundColor: "#3bb19b",
                  borderRadius: "20px",
                  width: "180px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                Register
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
