import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Incomes from './pages/Incomes';
import Category from './pages/Category';
import CreateExpense from './pages/CreateExpense';
import Expenses from './pages/Expenses';
import CreateIncome from './pages/CreateIncome';
import EditExpense from './pages/EditExpense';
import EditIncome from './pages/EditIncome';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import GuestLayout from './layouts/GuestLayout';
import AuthLayout from './layouts/AuthLayout';
import ResetPassword from './pages/ResetPassword';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <GuestLayout />,
        children: [
          {
            path: '/',
            element: <Landing />,
          },
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
              {
                path: 'reset-password',
                element: <ResetPassword />,
              },
            ],
          },
        ],
      },

      // DASHBOARD
      {
        path: '/dashboard',
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
              {
                path: ':id/edit',
                element: <EditExpense />,
              },
            ],
          },

          {
            path: 'incomes',
            children: [
              {
                index: true,
                element: <Incomes />,
              },
              {
                path: 'create',
                element: <CreateIncome />,
              },
              {
                path: ':id/edit',
                element: <EditIncome />,
              },
            ],
          },
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
