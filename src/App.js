import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Collaboration from './Components/Pages/Collaboration/Collaboration';
import Competition from './Components/Pages/Competition/Competition';
import Discussion from './Components/Pages/Discussion/Discussion';
import Home from './Components/Pages/Home/Home';
import Ide from './Components/Pages/Ide/Ide';
import Login from './Components/Pages/Login/Login';
import Problem from './Components/Pages/Problem/Problem';
import Signup from './Components/Pages/Signup/Signup';
import UserProfile from './Components/Pages/UserProfile/UserProfile';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/profile',
          element: <UserProfile></UserProfile>
        },
        {
          path: '/collaboration',
          element: <Collaboration></Collaboration>
        },
        {
          path: '/competition',
          element: <Competition></Competition>
        },
        {
          path: '/discussion',
          element: <Discussion></Discussion>
        },
        {
          path: '/ide',
          element: <Ide></Ide>
        },
        {
          path: '/problems',
          element: <Problem></Problem>
        },

      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
