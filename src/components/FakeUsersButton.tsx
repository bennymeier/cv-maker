'use client';
import generateFakeUsers from '@/utils/generateFakeUsers';
import { Button } from '@chakra-ui/react';
import { IconUserPlus } from '@tabler/icons-react';
type Props = {
  quantity?: number;
};
export default function FakeUsersButton({ quantity = 10 }: Props) {
  const handleClick = () => {
    const users = generateFakeUsers(quantity);
    users.forEach((user) => {
      try {
        fetch('http://localhost:3000/api/users', {
          method: 'POST',
          body: JSON.stringify(user),
        });
      } catch (err: any) {
        console.error(err.message);
      }
    });
  };
  return (
    <Button leftIcon={<IconUserPlus />} onClick={handleClick} paddingX="8">
      Generate Users
    </Button>
  );
}
