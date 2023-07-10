import {
  FaChartBar,
  FaLongArrowAltDown,
  FaMoneyCheck,
  FaBuffer,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

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

function Navigation() {
  return (
    <nav className="flex justify-end space-x-3 border-b sm:space-x-5 border-gray-50">
      {navigation.map(item => (
        <NavLink
          key={item.label}
          to={item.to}
          className={({ isActive }) => `
            text-sm  flex items-center gap-1 sm:gap-2 px-1 h-full py-3 border-b-2
            ${isActive ? 'border-gray-300' : 'border-transparent'}
          `}
          end
        >
          <item.icon />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
