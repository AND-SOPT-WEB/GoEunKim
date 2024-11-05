import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { theme, global } from './styles';
import { Global, ThemeProvider } from '@emotion/react';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    { path: '/mypage', element: <>3</> },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
