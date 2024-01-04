import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { IconDeviceFloppy, IconPlus } from '@tabler/icons-react';

export default function WorkExperience() {
  return (
    <Box boxShadow="xl" borderRadius="4">
      <Heading>Work Experience</Heading>
      <Box as="form">
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="position">Position</FormLabel>
            <Input id="position" name="position" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="company">Company</FormLabel>
            <Input id="company" name="company" />
          </Box>
        </Stack>
        <Stack>
          <Box width="100%">
            <FormLabel htmlFor="location">Location</FormLabel>
            <Input id="location" name="location" />
          </Box>
        </Stack>
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="startdate">Start Date</FormLabel>
            <Input id="startdate" name="startdate" type="month" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="enddate">End Date</FormLabel>
            <Input id="enddate" name="enddate" type="month" />
          </Box>
        </Stack>
        <Stack marginTop="4" flexDirection="row">
          <Checkbox id="currentjob" name="currentjob">
            Current Job
          </Checkbox>
        </Stack>
        <Divider />
        <Flex flexDirection="row-reverse" paddingX="6" paddingY="4">
          <Button colorScheme="green" leftIcon={<IconDeviceFloppy />}>
            Save
          </Button>
        </Flex>
      </Box>
      <Box paddingBottom="4">
        <Button leftIcon={<IconPlus />}>Add Work Experience</Button>
      </Box>
    </Box>
  );
}
