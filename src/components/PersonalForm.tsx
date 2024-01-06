import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  Stack,
  Select,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { IconDeviceFloppy } from '@tabler/icons-react';
import React, { useState } from 'react';

export default function PersonalForm() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    position: '',
    phone: '',
    street: '',
    zip: '',
    city: '',
    driverlicense: '',
    gender: '',
    dateofbirth: '',
    placeofbirth: '',
    nationality: '',
    maritalstatus: '',
    linkedin: '',
    personalwebsite: '',
  });
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    try {
      fetch('http://localhost:3000/api/users', {
        method: 'POST',
        body: JSON.stringify(formJson),
      });
    } catch (err: any) {
      setLoading(true);
      toast({
        title: 'Error',
        description: err.message,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading(false);
      toast({
        title: 'User created',
        status: 'success',
        isClosable: true,
      });
    }
    console.log(formJson);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log('Name: ', name, ' Value: ', value);
  };

  return (
    <Box>
      <Heading>Personal Data</Heading>
      <Box as="form" boxShadow="xl" borderRadius="4" onSubmit={handleSubmit}>
        <Stack padding="6" gap="5">
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="firstName">Firstname</FormLabel>
              <Input id="firstName" name="firstName" onChange={handleChange} />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="lastName">Lastname</FormLabel>
              <Input id="lastName" name="lastName" onChange={handleChange} />
            </Box>
          </Stack>
          <Stack>
            <Box width="100%">
              <FormLabel htmlFor="email">E-Mail</FormLabel>
              <Input id="email" name="email" onChange={handleChange} />
            </Box>
          </Stack>
          <Stack>
            <Box width="100%">
              <FormLabel htmlFor="currentPosition">Position</FormLabel>
              <Input
                id="currentPosition"
                name="currentPosition"
                onChange={handleChange}
              />
            </Box>
          </Stack>
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="phoneNumber">Phone</FormLabel>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                onChange={handleChange}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="street">Street</FormLabel>
              <Input id="street" name="street" onChange={handleChange} />
            </Box>
          </Stack>
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
              <Input
                id="postalCode"
                name="postalCode"
                onChange={handleChange}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="city">City</FormLabel>
              <Input id="city" name="city" onChange={handleChange} />
            </Box>
          </Stack>
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="drivingLicenses">Driver License</FormLabel>
              <Input
                id="drivingLicenses"
                name="drivingLicenses"
                onChange={handleChange}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select
                id="gender"
                name="gender"
                onChange={handleChange}
                defaultValue="Female"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </Select>
            </Box>
          </Stack>
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="dateOfBirth">Date of birth</FormLabel>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                onChange={handleChange}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="placeOfBirth">Place of birth</FormLabel>
              <Input
                id="placeOfBirth"
                name="placeOfBirth"
                onChange={handleChange}
              />
            </Box>
          </Stack>
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="nationality">Nationality</FormLabel>
              <Input
                id="nationality"
                name="nationality"
                onChange={handleChange}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="maritalStatus">Marital status</FormLabel>
              <Select
                id="maritalStatus"
                name="maritalStatus"
                onChange={handleChange}
                defaultValue="Single"
              >
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
              <Input id="linkedin" name="linkedin" onChange={handleChange} />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="website">Personal website</FormLabel>
              <Input id="website" name="website" onChange={handleChange} />
            </Box>
          </Stack>
        </Stack>
        <Divider />
        <Flex flexDirection="row-reverse" paddingX="6" paddingY="4">
          <Button
            colorScheme="green"
            leftIcon={<IconDeviceFloppy />}
            isLoading={isLoading}
            loadingText="Submitting"
            type="submit"
          >
            Save
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
