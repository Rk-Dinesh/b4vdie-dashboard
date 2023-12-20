import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../host";

const defaultTheme = createTheme();

export default function SignInSide({ setToken }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(`${API}/adminlogin`, data, { headers });
      const { token } = response.data;

      setToken(token);
      localStorage.setItem("token", token);
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response);
      toast.error("Invalid credentials");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
     <Grid
  container
  component="main"
  sx={{
    height: "100vh",
    backgroundImage: "url(https://source.unsplash.com/random?travel)",
    backgroundRepeat: "no-repeat",
    backgroundColor: (t) =>
      t.palette.mode === "light"
        ? t.palette.grey[40]
        : t.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center", 
  }}
>
  <CssBaseline />
  <Box
    component={Paper}
    elevation={6}
    sx={{
      padding: 4,
      width: "40%", 
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(5px)", 
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0)",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5" >
      Sign in
    </Typography>
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
    >
       <TextField
      margin="dense"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
    <TextField
      margin="dense"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In
    </Button>
    <Grid container>
    <Grid item>
    <Link href="/forgotpassword" variant="body" style={{ color: 'red', fontSize : "18px", fontWeight: "bolder"}}>
        Forgot password?
      </Link>
    </Grid>
  </Grid>
    </Box>
  </Box>
</Grid>

    </ThemeProvider>
  );
}
