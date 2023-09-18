import { Text } from '@tremor/react';
import Logo from '../../ui/Logo';

function Footer() {
  return (
    <footer className="mt-20 p-4 text-center">
      <Logo className="mx-auto h-10 w-10" />
      <Text className="mt-4">© 2023 Pocket Wide. All Rights Reserved.</Text>

      <ul className="mt-4 flex items-center justify-center gap-4 text-gray-600">
        <li>
          <a href="#">Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
