import { Text } from '@tremor/react';
import Logo from '../../ui/Logo';

function Footer() {
  return (
    <footer className="py-20 text-center">
      <Logo className="w-10 h-10 mx-auto" />
      <Text className="mt-4">
        © 2023 Your Company Name. All Rights Reserved.
      </Text>

      <ul className='flex items-center justify-center gap-4 mt-4 text-gray-600'>
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
