import React, { useState } from "react";
import { signInWithAnEmail } from "../../firebase-config";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import "./signIn.style.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userSignedIn = await signInWithAnEmail(
        formData.email,
        formData.password
      );

      if (userSignedIn) {
        navigate("/todoapp");
      }
      console.log(" user is signedIn", userSignedIn);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangeHandler}
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
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <RouterLink to="/signup">
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const onChangeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const userSignedIn = await signInWithAnEmail(
//         formData.email,
//         formData.password
//       );
//       console.log(" user is signedIn", userSignedIn);
//     } catch (error) {
//       console.log("error: ", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Sign In</h1>
//       <form onSubmit={onSubmitHandler}>
//         <input
//           name="email"
//           type="email"
//           required
//           value={formData.email}
//           onChange={onChangeHandler}
//         ></input>
//         <input
//           name="password"
//           type="password"
//           required
//           value={formData.password}
//           onChange={onChangeHandler}
//         ></input>
//         <button type="submit"> Sign In</button>
//       </form>
//     </div>
//   );
// };

export default SignIn;
