import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
