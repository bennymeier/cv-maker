'use client';
import FakeUsersButton from '@/components/FakeUsersButton';
import {
  Box,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { IconSearch } from '@tabler/icons-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box as="main" padding="4">
      <Box boxShadow="lg" padding="4">
        <Flex alignItems="center" justifyContent="space-between" gap="5">
          <Heading>Users</Heading>
          <Flex gap="5" alignItems="center">
            <FakeUsersButton />
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={IconSearch} />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
          </Flex>
        </Flex>
        {children}
      </Box>
    </Box>
  );
}
