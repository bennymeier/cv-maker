import { Box } from '@chakra-ui/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box as="main" padding="4">
      {children}
    </Box>
  );
}
