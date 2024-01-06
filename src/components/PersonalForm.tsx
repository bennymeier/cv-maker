'use client';
import { UserDocument } from '@/models/User';
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
import React, { useEffect, useState } from 'react';

type Props = {
  initialData?: Partial<UserDocument>;
  method?: 'PUT' | 'POST';
};
export default function PersonalForm({ initialData, method = 'POST' }: Props) {
  const toast = useToast();
  const [formData, setFormData] = useState<Partial<UserDocument>>({
    firstName: '',
    lastName: '',
    email: '',
    currentPosition: '',
    postalCode: '',
    streetName: '',
    city: '',
    drivingLicenses: '',
    gender: '',
    dateOfBirth: '',
    placeOfBirth: '',
    nationality: '',
    maritalStatus: '',
    linkedin: '',
    website: '',
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    try {
      const userId = initialData?._id;
      if (userId && method === 'PUT') {
        await fetch(`http://localhost:3000/api/users/${userId}`, {
          method: 'PUT',
          body: JSON.stringify(formJson),
        });
      } else {
        await fetch(`http://localhost:3000/api/users`, {
          method: 'POST',
          body: JSON.stringify(formJson),
        });
      }
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
        title: `User ${method === 'POST' ? 'created' : 'updated'}`,
        status: 'success',
        isClosable: true,
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Heading>Personal Data</Heading>
      <Box as="form" boxShadow="xl" borderRadius="4" onSubmit={handleSubmit}>
        <Stack padding="6" gap="5">
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="firstName">Firstname</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                onChange={handleChange}
                defaultValue={formData.firstName}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="lastName">Lastname</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                onChange={handleChange}
                defaultValue={formData.lastName}
              />
            </Box>
          </Stack>
          <Stack>
            <Box width="100%">
              <FormLabel htmlFor="email">E-Mail</FormLabel>
              <Input
                id="email"
                name="email"
                onChange={handleChange}
                defaultValue={formData.email}
              />
            </Box>
          </Stack>
          <Stack>
            <Box width="100%">
              <FormLabel htmlFor="currentPosition">Position</FormLabel>
              <Input
                id="currentPosition"
                name="currentPosition"
                onChange={handleChange}
                defaultValue={formData.currentPosition}
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
                defaultValue={formData.phoneNumber}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="streetName">Street</FormLabel>
              <Input
                id="streetName"
                name="streetName"
                onChange={handleChange}
                defaultValue={formData.streetName}
              />
            </Box>
          </Stack>
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
              <Input
                id="postalCode"
                name="postalCode"
                onChange={handleChange}
                defaultValue={formData.postalCode}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="city">City</FormLabel>
              <Input
                id="city"
                name="city"
                onChange={handleChange}
                defaultValue={formData.city}
              />
            </Box>
          </Stack>
          <Stack flexDirection="row">
            <Box width="100%">
              <FormLabel htmlFor="drivingLicenses">Driver License</FormLabel>
              <Input
                id="drivingLicenses"
                name="drivingLicenses"
                onChange={handleChange}
                defaultValue={formData.drivingLicenses}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select
                id="gender"
                name="gender"
                onChange={handleChange}
                value={formData.gender}
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
                defaultValue={formData.dateOfBirth}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="placeOfBirth">Place of birth</FormLabel>
              <Input
                id="placeOfBirth"
                name="placeOfBirth"
                onChange={handleChange}
                defaultValue={formData.placeOfBirth}
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
                defaultValue={formData.nationality}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="maritalStatus">Marital status</FormLabel>
              <Select
                id="maritalStatus"
                name="maritalStatus"
                onChange={handleChange}
                value={formData.maritalStatus}
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
              <Input
                id="linkedin"
                name="linkedin"
                onChange={handleChange}
                defaultValue={formData.linkedin}
              />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="website">Personal website</FormLabel>
              <Input
                id="website"
                name="website"
                onChange={handleChange}
                defaultValue={formData.website}
              />
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
