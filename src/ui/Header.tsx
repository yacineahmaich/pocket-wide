import { Text, Icon } from '@tremor/react';
import Logo from './Logo';
import {} from 'react-icons/fa';
import { useUser } from '../features/auth/useUser';
import { useLogout } from '../features/auth/useLogout';
import {
  FaAngleDown,
  FaChartBar,
  FaLongArrowAltDown,
  FaMoneyCheck,
  FaBuffer,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navigation = [
  {
    to: '',
    label: 'Dashboard',
    icon: FaChartBar,
  },
  {
    to: '/expenses',
    label: 'Expenses',
    icon: FaLongArrowAltDown,
  },
  {
    to: '/incomes',
    label: 'Incomes',
    icon: FaMoneyCheck,
  },
  {
    to: '/category',
    label: 'Category',
    icon: FaBuffer,
  },
];

function Header() {
  const { user } = useUser();
  // const { mutate: logout, isLoading } = useLogout();

  return (
    <header className="flex items-center justify-between w-full py-3 border-b border-b-gray-50">
      <Logo className="w-10 h-10" />
      <nav className="flex items-center gap-3">
        <ul className="flex items-center gap-6 mr-20 text-sm font-medium text-gray-400">
          {navigation.map(item => (
            <li key={item.label}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
          <Logo className="w-6 h-6 mr-3" />
          <Text>{user?.user_metadata.username ?? user?.email}</Text>
          <Icon icon={FaAngleDown} size="xs" color="gray" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
