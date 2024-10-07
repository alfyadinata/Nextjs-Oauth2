import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { getRandomColor, getRandomJobTitle } from "@/utils/getRandom";
import { TUser } from "@/types/TUser";

const UserCard = ({ user }: { user: TUser }) => {
  const randomColor = useMemo(() => getRandomColor(), []);
  const randomJobTitle = useMemo(() => getRandomJobTitle(), []);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.2)",
        },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: 100,
          background: `linear-gradient(45deg, ${randomColor[0]}, ${randomColor[1]})`,
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Avatar
          alt={user.first_name}
          src={user.avatar}
          sx={{
            width: 100,
            height: 100,
            border: "4px solid white",
            boxShadow: 2,
            position: "absolute",
            top: -50,
          }}
        />
        <Box sx={{ mt: 7, textAlign: "center" }}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            {user.first_name} {user.last_name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {user.email}
          </Typography>
          <Chip
            label={randomJobTitle}
            color="primary"
            size="small"
            sx={{ mt: 1 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
