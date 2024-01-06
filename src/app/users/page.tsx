import UserTable from '@/components/UserTable';
import { Box } from '@chakra-ui/react';

async function getUsers() {
  'use server';
  const res = await fetch(`http://localhost:3000/api/users`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Dashboard() {
  const { data: userData } = await getUsers();

  return (
    <Box margin="4" padding="2">
      <UserTable users={userData} />
    </Box>
  );
}
