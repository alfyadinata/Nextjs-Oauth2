"use client";

import { signIn } from "next-auth/react";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";

export default function Home() {
  const handleGoogleSignIn = () => {
    signIn("google", {
      callbackUrl: `${process.env.NEXT_PUBLIC_AUTH_URL}/users`,
    });
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
        <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Welcome
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Sign in to access your account
          </Typography>
          <Button
            fullWidth
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in with Google
          </Button>
        </Paper>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 5 }}
        >
          By signing in, you agree to our{" "}
          <Typography component="a" href="#!" color="primary">
            Terms of Service
          </Typography>{" "}
          and{" "}
          <Typography component="a" href="#!" color="primary">
            Privacy Policy
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
}
