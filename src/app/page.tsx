'use client';
import PersonalForm from '@/components/PersonalForm';
import ProfileForm from '@/components/ProfileForm';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box as="main" p="6">
      <ProfileForm />
      <PersonalForm />
    </Box>
  );
}
