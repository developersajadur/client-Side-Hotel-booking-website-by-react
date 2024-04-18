import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Blogs from './Components/Blog/Blogs';
import RoomDetails from './Components/Room/RoomDetails';
import Rooms from './Components/Room/Rooms';
import BlogDetails from './Components/Blog/BlogDetails';
import Contact from './Components/Contact';
import AuthProvider from './AuthProvider';
import Register from './Components/SignIn&SignUp/Register';
import Login from './Components/SignIn&SignUp/Login';
import PrivateRoute from './Components/privateRoutes/PrivateRoute';
import Profile from './Components/Profile';
import MyRooms from './Components/Room/MyRooms';
import ErrorPage from './Components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
       
      },
      {
        path:"rooms",
        element:<Rooms></Rooms>,
        loader:() =>fetch("/RoomDetailsData.json")
      },
    
      {
        path:"/room-details/:roomId",
        element:<PrivateRoute>
          <RoomDetails></RoomDetails>
        </PrivateRoute>,
        loader:() =>fetch("/RoomDetailsData.json")
        
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>,
        loader:() => fetch("/blog.json")
      },
      {
        path:"/blog/:blogId",
        element:<BlogDetails></BlogDetails>,
        loader:() => fetch("/blog.json")
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
    {
      path:"/profile",
      element:<PrivateRoute>
        <Profile></Profile>
        </PrivateRoute>
    },
    {
      path:"/my-rooms",
      element:<PrivateRoute>
       <MyRooms></MyRooms>
        </PrivateRoute>
    },
    
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
)
