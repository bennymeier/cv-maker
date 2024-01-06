'use client';
import { UserDocument } from '@/models/User';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Image,
  IconButton,
  Flex,
  useToast,
  TableCaption,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { IconTrash, IconPencil } from '@tabler/icons-react';
import React, { useState } from 'react';

const TABLE_HEADER = [
  { text: 'Name', key: 'name' },
  {
    text: 'E-Mail',
    key: 'email',
  },
  { text: 'Position', key: 'position' },
  { text: '', key: 'delete' },
  { text: '', key: 'edit' },
];
const TableBodyTh = ({ children }: { children: React.ReactNode }) => (
  <Th textTransform="none" fontWeight="normal">
    {children}
  </Th>
);
type Props = {
  users: UserDocument[];
};
export default function UserTable({ users }: Props) {
  const toast = useToast();
  const [currentUsers, setCurrentUsers] = useState<UserDocument[]>(users);
  const handleDelete = async (userId: string) => {
    try {
      await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'DELETE',
      });
    } catch (err) {
      toast({ title: 'User deletion failed', status: 'error' });
    } finally {
      toast({ title: 'User deleted', status: 'success' });
      const filteredUsers = currentUsers.filter((user) => user._id !== userId);
      setCurrentUsers(filteredUsers);
    }
  };

  return (
    <TableContainer boxShadow="lg">
      <Table variant="simple" whiteSpace="nowrap">
        <TableCaption>Users: {currentUsers.length}</TableCaption>
        <Thead background="gray.100">
          <Tr>
            {TABLE_HEADER.map((heading) => (
              <Th textTransform="none" key={heading.key}>
                {heading.text}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {currentUsers.map((user) => {
            const { _id, avatar, email, firstName, lastName, currentPosition } =
              user;
            return (
              <Tr key={_id}>
                <Th textTransform="none">
                  <Flex alignItems="center" flexDirection="row" gap="3">
                    <Image
                      alt={`Profile Photo of ${firstName} ${lastName}`}
                      borderRadius="full"
                      boxSize="10"
                      src={avatar}
                    />
                    {firstName} {lastName}
                  </Flex>
                </Th>
                <TableBodyTh>
                  <Link color="cornflowerblue" href={`/users/${_id}`}>
                    {email}
                  </Link>
                </TableBodyTh>
                <TableBodyTh>{currentPosition}</TableBodyTh>
                <Th>
                  <IconButton
                    variant="ghost"
                    icon={<IconTrash />}
                    aria-label={`Delete user ${firstName} ${lastName}`}
                    onClick={() => handleDelete(user._id)}
                  />
                </Th>
                <Th>
                  <IconButton
                    variant="ghost"
                    icon={<IconPencil />}
                    aria-label={`Edit user ${firstName} ${lastName}`}
                  />
                </Th>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
