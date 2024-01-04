import { Box, Text, Heading } from '@chakra-ui/react';
import Editor from './editor/Editor';

export default function ProfileForm() {
  return (
    <Box>
      <Heading>Profile</Heading>
      <Text>
        A short section at the beginning of the CV summarizing your relevant
        experience and qualifications in 4 - 6 lines.
      </Text>
      <Editor />
    </Box>
  );
}
