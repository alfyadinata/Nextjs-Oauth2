"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Switch,
} from "@mui/material";
import { useUserStore } from "@/store/useUserStore";
import { signOut, useSession } from "next-auth/react";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { useLayoutStore } from "@/store/useLayoutStore";

const Header: React.FC<{ title: string }> = ({ title }) => {
  const { data: session } = useSession();
  const { name, image, setState } = useUserStore();
  const { mode, setMode } = useLayoutStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
    handleClose();
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (session?.user) {
      const user = session?.user;
      setState("email", user?.email || "");
      setState("name", user?.name || "");
      setState("image", user?.image || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <AppBar position="static" sx={{ boxShadow: 3 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ mr: 1 }}>
            {mode === "dark" ? "Dark Mode" : "Light Mode"}
          </Typography>
          <Switch
            checked={mode === "dark"}
            onChange={() => setMode(mode === "dark" ? "light" : "dark")}
            color="default"
          />
        </Box>
        <Box display="flex" alignItems="center">
          {name && (
            <Box display="flex" alignItems="center">
              <IconButton
                size="large"
                aria-label="current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <Avatar
                  alt={name}
                  src={image || undefined}
                  sx={{ width: 36, height: 36, marginRight: 1 }}
                />
                <ArrowDropDownCircleOutlined sx={{ fontSize: 28 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{name}</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
