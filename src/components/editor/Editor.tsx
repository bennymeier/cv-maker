'use client';
import { Button, Box, Flex } from '@chakra-ui/react';
import './style.css';
import UnderlineExtension from '@tiptap/extension-underline';
import LinkExtension from '@tiptap/extension-link';
import {
  useEditor,
  EditorContent,
  type Editor as EditorType,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import { IconDeviceFloppy } from '@tabler/icons-react';

export default function Editor() {
  const extensions = [
    StarterKit,
    UnderlineExtension,
    LinkExtension.configure({
      autolink: true,
      openOnClick: false,
      linkOnPaste: true,
    }),
  ];
  const editor = useEditor({ extensions });

  return (
    <Box as="form" boxShadow="xl" borderRadius="4">
      <Flex
        background="white"
        border="3px solid black"
        flexDirection="column"
        borderRadius="lg"
      >
        <MenuBar editor={editor as EditorType} />
        <EditorContent editor={editor} />
      </Flex>
      <Flex flexDirection="row-reverse" paddingX="6" paddingY="4">
        <Button colorScheme="green" leftIcon={<IconDeviceFloppy />}>
          Save
        </Button>
      </Flex>
    </Box>
  );
}
