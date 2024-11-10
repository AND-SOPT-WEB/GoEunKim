import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { theme, global } from './styles';
import { Global, ThemeProvider } from '@emotion/react';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Mypage from './pages/Mypage/Mypage';
import Hobby from './components/Hobby/hobby';

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
    {
      path: '/mypage',
      element: <Mypage />,
      children: [
        {
          index: true,
          element: <Hobby />,
        },
        {
          path: 'edit',
          element: <h1>dddddddd</h1>,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
