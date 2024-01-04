'use client';
import PersonalForm from '@/components/PersonalForm';
import PhotoUpload from '@/components/PhotoUpload';
import ProfileForm from '@/components/ProfileForm';
import WorkExperience from '@/components/WorkExperience';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box as="main" p="6">
      <PhotoUpload />
      <PersonalForm />
      <ProfileForm />
      <WorkExperience />
    </Box>
  );
}
