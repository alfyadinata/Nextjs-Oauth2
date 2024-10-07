"use client";

import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { Lock, Home, ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Unauthorized() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 2,
            backgroundColor: "background.paper",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Lock sx={{ fontSize: 100, color: "error.main", mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Access Denied
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Oops! It seems you dont have permission to access this page.
            </Typography>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Button
                variant="outlined"
                startIcon={<ArrowBack />}
                onClick={handleGoHome}
              >
                Go Back
              </Button>
              <Button
                variant="contained"
                startIcon={<Home />}
                onClick={handleGoHome}
              >
                Go to Homepage
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
