import {
  Box,
  Input,
  Icon,
  Text,
  Image,
  Heading,
  IconButton,
  FormLabel,
  Button,
  Divider,
  Flex,
} from '@chakra-ui/react';
import {
  IconTrash,
  IconFileUpload,
  IconDeviceFloppy,
} from '@tabler/icons-react';
import React, { useRef, useState } from 'react';

export default function PhotoUpload() {
  const [currentImage, setCurrentImage] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const inputField = useRef<HTMLInputElement>(null);

  const fileToBase64 = (file: File, callback: Function) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    if (inputField?.current) {
      inputField.current.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event?.target?.files;
    if (files) {
      fileToBase64(files[0], (imageAsBase64: string) => {
        setCurrentImage(imageAsBase64);
        setIsDragOver(false);
      });
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.type === 'dragover') {
      return;
    }
    const files = event?.dataTransfer?.files;
    if (files) {
      fileToBase64(files[0], (imageAsBase64: string) => {
        setCurrentImage(imageAsBase64);
        setIsDragOver(false);
      });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  return (
    <Box>
      <Heading>Photo Upload</Heading>
      <Box as="form" boxShadow="xl" borderRadius="4">
        <FormLabel htmlFor="profilephoto">Profile Photo</FormLabel>
        {currentImage && (
          <Box position="relative">
            <Image
              src={currentImage}
              alt="Your profile photo"
              width="150"
              height="150"
            />
            <IconButton
              aria-label="Delete image"
              icon={<IconTrash aria-label="Delete image" />}
              size="xs"
              position="absolute"
              top="5px"
              left="5px"
              onClick={() => setCurrentImage('')}
            />
          </Box>
        )}
        <Box
          p="4"
          bg="gray.100"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100%"
          cursor="pointer"
          border={isDragOver ? '3px solid black' : 'none'}
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Input
            name="profilephoto"
            id="profilephoto"
            type="file"
            accept="image/*"
            display="none"
            ref={inputField}
            onChange={handleChange}
          />
          <Icon as={IconFileUpload} w={8} h={8} mb="3" color="gray.600" />
          <Text color="gray.700" fontWeight="semibold">
            Click or drag file to this area to upload
          </Text>
        </Box>
        <Divider />
        <Flex flexDirection="row-reverse" paddingX="6" paddingY="4">
          <Button colorScheme="green" leftIcon={<IconDeviceFloppy />}>
            Save
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
