import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  Box,
  Container,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import bglogin from "../../asset/img/bglogin.jpg";
import bglogin2 from "../../asset/img/bglogin2.jpg";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when the form is submitted
    try {
      const url = "https://scary-tiara-wasp.cyclic.app/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    setIsLoading(false); // Set isLoading back to false after the request is completed
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
              <h1>Login to Your Account</h1>
              <TextField
                fullWidth
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
                color="secondary"
              />
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  fullWidth
                  label="Password"
                  placeholder="Input Password"
                  id="filled-adornment-password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  color="secondary"
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
                disabled={isLoading} // Disable the button when loading
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
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" /> // Show loading indicator
                ) : (
                  "Login" // Show the "Login" text
                )}
              </Button>
            </form>
          </Box>
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
            <h1 style={{ color: "black" }}>New Here?</h1>
            <Link to="/signup">
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
                Register
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
