import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  const { t } = useTranslation();
  const navigation = [
    {
      to: '/dashboard',
      label: t('dashboard'),
    },
    {
      to: '/dashboard/expenses',
      label: t('expenses'),
    },
    {
      to: '/dashboard/incomes',
      label: t('incomes'),
    },
    {
      to: '/dashboard/category',
      label: t('category'),
    },
  ];

  return (
    <ul className="mr-10 flex items-center gap-6 text-sm font-medium text-gray-400 lg:mr-20">
      {navigation.map(item => (
        <li key={item.label}>
          <Link to={item.to}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MainNavigation;
