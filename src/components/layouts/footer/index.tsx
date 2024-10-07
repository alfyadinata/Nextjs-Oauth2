"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { useLayoutStore } from "@/store/useLayoutStore";

interface FooterProps {
  companyName: string;
  companyDescription: string;
}

const Footer: React.FC<FooterProps> = ({ companyName, companyDescription }) => {
  const currentYear = new Date().getFullYear();
  const { mode } = useLayoutStore();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: mode === "light" ? "primary.main" : "background.paper",
        color: "primary.contrastText",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {companyName}
            </Typography>
            <Typography variant="body2">{companyDescription}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/#!" color="inherit" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="/#!" color="inherit" display="block" sx={{ mb: 1 }}>
              Services
            </Link>
            <Link href="/#!" color="inherit" display="block">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                aria-label="Facebook"
                component="a"
                href="/#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                component="a"
                href="/#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                component="a"
                href="/#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                component="a"
                href="/#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.2)" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ mr: 2 }}>
            © {currentYear} {companyName}. All rights reserved.
          </Typography>
          <Box>
            <Link href="/#!" color="inherit" sx={{ mr: 2 }}>
              Privacy Policy
            </Link>
            <Link href="/#!" color="inherit">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
