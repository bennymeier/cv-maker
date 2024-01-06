'use client';
import generateFakeUsers from '@/utils/generateFakeUsers';
import { Button } from '@chakra-ui/react';
type Props = {
  quantity?: number;
};
export default function FakeUsersButton({ quantity = 10 }: Props) {
  const handleUsersClick = () => {
    const users = generateFakeUsers();
    console.log(users);
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
  return <Button onClick={handleUsersClick}>Fake Users</Button>;
}
