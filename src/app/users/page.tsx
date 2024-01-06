import FakeUsersButton from '@/components/FakeUsersButton';
import UserTable from '@/components/UserTable';
import { Link } from '@chakra-ui/next-js';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';

async function getUsers() {
  const res = await fetch(`http://localhost:3000/api/users`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Dashboard() {
  const { data: userData } = await getUsers();

  return (
    <Box>
      <Flex alignItems="center" gap="5">
        <Heading>Users</Heading>
        <FakeUsersButton />
      </Flex>
      <Box margin="4" padding="2">
        <Suspense>
          <UserTable users={userData} />
        </Suspense>
      </Box>
    </Box>
  );
}
