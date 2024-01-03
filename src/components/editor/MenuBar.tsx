import { IconButton, Flex } from '@chakra-ui/react';
import {
  IconBold,
  IconItalic,
  IconList,
  IconListNumbers,
  IconUnderline,
  IconLink,
} from '@tabler/icons-react';
import { type Editor } from '@tiptap/react';
import { Fragment } from 'react';

interface IEditor {
  editor: Editor;
}
export default function MenuBar({ editor }: IEditor) {
  const previousUrl = editor?.getAttributes('link').href;
  const items = [
    {
      icon: IconBold,
      title: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor?.isActive('bold'),
    },
    {
      icon: IconItalic,
      title: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor?.isActive('italic'),
    },
    {
      icon: IconUnderline,
      title: 'underline',
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: () => editor?.isActive('underline'),
    },
    {
      icon: IconList,
      title: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor?.isActive('bulletList'),
    },
    {
      icon: IconListNumbers,
      title: 'Ordered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor?.isActive('orderedList'),
    },
    {
      icon: IconLink,
      title: 'Link',
      action: () =>
        editor?.isActive('link')
          ? editor.chain().focus().unsetLink().run()
          : editor
              .chain()
              .focus()
              .extendMarkRange('link')
              .setLink({ href: previousUrl })
              .run(),
      isActive: () => editor?.isActive('link'),
    },
  ];

  return (
    <Flex gap="1" flexWrap="wrap" paddingY="1" background="gray.700">
      {items.map((item, index) => (
        <Fragment key={index}>
          <IconButton
            color={item.isActive && item.isActive() ? 'yellow' : 'white'}
            onClick={item.action}
            icon={<item.icon />}
            aria-label={item.title}
            title={item.title}
            variant="ghost"
            _hover={{ color: 'gray' }}
          />
        </Fragment>
      ))}
    </Flex>
  );
}
