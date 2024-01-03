'use client';
import { Divider, Flex } from '@chakra-ui/react';
import './style.css';
import UnderlineExtension from '@tiptap/extension-underline';
import LinkExtension from '@tiptap/extension-link';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

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
    <Flex
      background="white"
      border="3px solid black"
      flexDirection="column"
      borderRadius="lg"
    >
      <MenuBar editor={editor} />
      <Divider />
      <EditorContent editor={editor} />
    </Flex>
  );
}
