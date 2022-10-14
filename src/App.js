import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootstrap from './components/LoginBootstrap';
import RegistrarReactBootstrap from './components/RegistrarReactBootstrap';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <RegistrarReactBootstrap></RegistrarReactBootstrap>,
        },
        {
          path: '/registrar',
          element: <RegistrarReactBootstrap></RegistrarReactBootstrap>,
        },
        {
          path: '/login',
          element: <LoginBootstrap></LoginBootstrap>,
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
