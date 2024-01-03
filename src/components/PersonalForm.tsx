import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  Stack,
  Select,
} from '@chakra-ui/react';

export default function PersonalForm() {
  return (
    <Box as="form" boxShadow="xl" borderRadius="4">
      <Stack padding="6" gap="5">
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="firstname">Firstname</FormLabel>
            <Input id="firstname" name="firstname" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="lastname">Lastname</FormLabel>
            <Input id="lastname" name="lastname" />
          </Box>
        </Stack>
        <Stack>
          <Box width="100%">
            <FormLabel htmlFor="email">E-Mail</FormLabel>
            <Input id="email" name="email" />
          </Box>
        </Stack>
        <Stack>
          <Box width="100%">
            <FormLabel htmlFor="position">Position</FormLabel>
            <Input id="position" name="position" />
          </Box>
        </Stack>
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input id="phone" name="phone" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="street">Street</FormLabel>
            <Input id="street" name="street" />
          </Box>
        </Stack>
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="zip">Zip</FormLabel>
            <Input id="zip" name="zip" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="city">City</FormLabel>
            <Input id="city" name="city" />
          </Box>
        </Stack>
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="driverlicense">Driver License</FormLabel>
            <Input id="driverlicense" name="driverlicense" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select id="gender" name="gender">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </Select>
          </Box>
        </Stack>
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="dateofbirth">Date of birth</FormLabel>
            <Input id="dateofbirth" name="dateofbirth" type="date" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="placeofbirth">Place of birth</FormLabel>
            <Input id="placeofbirth" name="placeofbirth" />
          </Box>
        </Stack>
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="nationality">Nationality</FormLabel>
            <Input id="nationality" name="nationality" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="maritalstatus">Marital status</FormLabel>
            <Select id="maritalstatus" name="maritalstatus">
              <option value="Single">Single</option>
              <option value="Cohabitation">Cohabitation</option>
              <option value="Registered partnership">
                Registered partnership
              </option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </Select>
          </Box>
        </Stack>
        <Stack flexDirection="row">
          <Box width="100%">
            <FormLabel htmlFor="linkedin">LinkedIn</FormLabel>
            <Input id="linkedin" name="linkedin" />
          </Box>
          <Box width="100%">
            <FormLabel htmlFor="personalwebsite">Personal website</FormLabel>
            <Input id="personalwebsite" name="personalwebsite" />
          </Box>
        </Stack>
      </Stack>
      <Divider />
      <Flex flexDirection="row-reverse" paddingX="6" paddingY="4">
        <Button colorScheme="green">Save</Button>
      </Flex>
    </Box>
  );
}
