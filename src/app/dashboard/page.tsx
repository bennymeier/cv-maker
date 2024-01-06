import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { ResumeDocument } from '@/models/Resume';

async function getResumes() {
  const res = await fetch(`http://localhost:3000/api/resumes`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Page() {
  const { data: resumeData } = await getResumes();

  return (
    <Box>
      <Heading>Dashboard</Heading>
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
