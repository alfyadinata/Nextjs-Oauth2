import { findOneUser } from "@/services/users";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import Link from "next/link";

const UserDetail = async ({ params }: { params: { id: number } }) => {
  const user = await findOneUser(params.id);
  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          boxShadow: 3,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: 200,
            background: "linear-gradient(45deg, #7052F2, #9B51E0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            pb: 2,
          }}
        >
          <Avatar
            alt={user?.first_name}
            src={user?.avatar}
            sx={{
              width: 160,
              height: 160,
              border: "5px solid #fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />
        </Box>
        <CardContent sx={{ pt: 3 }}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            {user?.first_name} {user?.last_name}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="textSecondary"
            gutterBottom
          >
            {user?.email}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 3 }}>
            <Chip label="Software Engineer" color="primary" />
          </Box>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={4}>
              <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  254
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Posts
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  12.4k
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Followers
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  1.5k
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Following
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Typography variant="body1" paragraph>
            Passionate software engineer with a love for creating elegant
            solutions to complex problems. Always eager to learn and explore new
            technologies.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Link
                  href="/users"
                  style={{ textDecoration: "none", width: "100%" }}
                  passHref
                >
                  <Button fullWidth variant="outlined">
                    Back to List User
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserDetail;
