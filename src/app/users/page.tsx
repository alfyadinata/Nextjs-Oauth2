import { Box, Container, Typography } from "@mui/material";
import UserList from "./_components/UserList";
import PaginationComponent from "@/components/ui/pagination";
import { findAllUser } from "@/services/users";

const UsersPage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const page = parseInt(searchParams.page || "1", 10);
  const data = await findAllUser(page);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          mb: 4,
        }}
      >
        Our Amazing Team
      </Typography>

      <UserList users={data?.data || []} />
      <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
        <PaginationComponent
          totalPages={data?.total_pages || 0}
          currentPage={page}
          baseHref={`/users`}
        />
      </Box>
    </Container>
  );
};

export default UsersPage;
