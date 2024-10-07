import { TUser } from "@/types/TUser";
import { Grid } from "@mui/material";
import UserCard from "./UserCard";
import Link from "next/link";

const UserList = ({ users }: { users: TUser[] }) => (
  <Grid container spacing={2} justifyContent="center">
    {users.map((user) => (
      <Grid item key={user.id} xs={12} sm={6} md={6}>
        <Link href={`/users/${user.id}`} passHref color="inherit">
          <UserCard user={user} />
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default UserList;
