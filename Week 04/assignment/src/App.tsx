import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { theme, global } from './styles';
import { Global, ThemeProvider } from '@emotion/react';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>1</>,
    },
    {
      path: '/sign',
      element: <>2</>,
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
