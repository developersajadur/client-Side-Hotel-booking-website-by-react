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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        loader:() =>fetch("../public/RoomDetailsData.json")
      },
    
      {
        path:"/room-details/:roomId",
        element:<RoomDetails></RoomDetails>,
        loader:() =>fetch("../public/RoomDetailsData.json")
        
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
