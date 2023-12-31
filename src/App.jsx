import './App.css'
import Home from './Components/Layouts/Home';

import Main from './Components/Layouts/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './Components/Layouts/About';
import Contacts from './Components/Layouts/Contacts';
import Shop from './Components/Layouts/Shop';
import Journal from './Components/Layouts/Journal';
import NotFound from './Components/Layouts/NotFound';
import SignUp from './Components/Layouts/SignUp';
import LogOut from './Components/Layouts/LogOut';
import CheakOut from './Components/Layouts/CheakOut';
import ViewCart from './Components/Layouts/ViewCart';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>
      },
        {
        path:'/Home',
        element:<Home></Home>
      },
        {
        path:'/about',
        element:<About></About>
      },
        {
        path:'/contacts',
        element:<Contacts></Contacts>
      },
        {
        path:'/shop',
        element:<Shop></Shop>
      },
        {
        path:'/journal',
        element:<Journal></Journal>
      },
        {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
        {
        path:'/logout',
        element:<LogOut></LogOut>
      },
      {
      path:'/viewcart',
      element:<ViewCart></ViewCart>
    },
        {
        path:'/cheakout',
        element:<CheakOut></CheakOut>
      },
    ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    },
   
  ]);
  
  return (
    <>
 
  <RouterProvider router={router} />
    </>
  )
}

export default App
