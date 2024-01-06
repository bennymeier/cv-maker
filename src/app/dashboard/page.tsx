import FakeUsersButton from '@/components/FakeUsersButton';
import UserTable from '@/components/UserTable';
import { ResumeDocument } from '@/models/Resume';
import generateFakeUsers from '@/utils/generateFakeUsers';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { Suspense } from 'react';

async function getUsers() {
  const res = await fetch(`http://localhost:3000/api/users`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getResumes() {
  const res = await fetch(`http://localhost:3000/api/resumes`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Dashboard() {
  const { data: userData } = await getUsers();
  const { data: resumeData } = await getResumes();

  return (
    <Box>
      <Heading>Dashboard</Heading>
      <Flex>
        <FakeUsersButton />
        <Button>Fake Resumes</Button>
      </Flex>
      <Box margin="4" padding="2">
        <Suspense fallback={<Text>Loading...</Text>}>
          <UserTable users={userData} />
        </Suspense>
      </Box>
      <Box margin="4" padding="2">
        {resumeData.map((resume: ResumeDocument) => {
          return (
            <Box key={resume._id}>
              <pre>{JSON.stringify(resume)}</pre>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
