'use client';
import generateFakeResumes from '@/utils/generateFakeResumes';
import { Button } from '@chakra-ui/react';
type Props = {
  quantity?: number;
};
export default function FakeUsersButton({ quantity = 10 }: Props) {
  const handleClick = () => {
    const resumes = generateFakeResumes(quantity);
    resumes.forEach((resume) => {
      try {
        fetch('http://localhost:3000/api/resumes', {
          method: 'POST',
          body: JSON.stringify(resume),
        });
      } catch (err: any) {
        console.error(err.message);
      }
    });
  };
  return (
    <Button onClick={handleClick} size="xs">
      Fake Resumes
    </Button>
  );
}
