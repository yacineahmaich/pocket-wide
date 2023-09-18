import React from 'react';
import { NAVIGATION } from '../../utils/constants';
import { Link } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  return (
    <ul className="mr-10 flex items-center gap-6 text-sm font-medium text-gray-400 lg:mr-20">
      {NAVIGATION.map(item => (
        <li key={item.label}>
          <Link to={item.to}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MainNavigation;
