import { IconButton } from '@chakra-ui/react';

interface IMenuItem {
  icon: any;
  title: string;
  action: any;
  isAtive?: boolean;
}
export default function MenuItem({
  icon,
  title,
  action,
  isActive = null,
}: IMenuItem) {
  return (
    <>
      <IconButton
        ariaLabel={title}
        // className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
        onClick={action}
        title={title}
      />
    </>
  );
}
