import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Incomes from './pages/Incomes';
import Category from './pages/Category';
import CreateExpense from './pages/CreateExpense';
import Expenses from './pages/Expenses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // Auth
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },

      // DASHBOARD
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'expenses',
            children: [
              {
                index: true,
                element: <Expenses />,
              },
              {
                path: 'create',
                element: <CreateExpense />,
              },
            ],
          },

          {
            path: 'incomes',
            element: <Incomes />,
          },
          {
            path: 'category',
            element: <Category />,
          },
        ],
      },
    ],
  },
]);

export default router;
