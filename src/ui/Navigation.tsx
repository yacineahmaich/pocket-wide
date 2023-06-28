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
    <nav className="flex justify-end py-3 space-x-3 border-b border-gray-50">
      {navigation.map(item => (
        <NavLink
          key={item.label}
          to={item.to}
          className={({ isActive }) => `
          flex items-center gap-2 px-4 py-0.5 transition-all border border-gray-100 rounded-full bg-gray-50 hover:ring-1 ring-tremor-brand-emphasis hover:border-transparent hover:text-tremor-brand-emphasis hover:bg-tremor-background
          ${
            isActive &&
            'ring-tremor-brand-emphasis text-tremor-brand-emphasis bg-tremor-background'
          }          
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
