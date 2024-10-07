"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  LinearProgress,
  Fade,
} from "@mui/material";
import { Lock, Home, ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Unauthorized() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setShowContent(true);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
          {!showContent ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          ) : (
            <Fade in={showContent} timeout={1000}>
              <Box sx={{ textAlign: "center" }}>
                <Lock sx={{ fontSize: 100, color: "error.main", mb: 2 }} />
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
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
            </Fade>
          )}
        </Paper>
      </Box>
    </Container>
  );
}
