import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import CreateTask from "../Components/CreateTask/CreateTask";
import MyTask from "../Components/MyTask/MyTask";
import EdiPost from "../Components/Edit/Edit";
import Profile from "../Profile/Profile";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
      },
     
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
      ,

    ]
  },
  {
    path: "/dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      {
        path: '/dashboard/create',
        element: <CreateTask></CreateTask>
      },
      {
        path: '/dashboard',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard/myTask',
        element: <MyTask></MyTask>
      },
      {
        path: 'editTask/:id',
        element: <EdiPost></EdiPost>,
        loader: ({ params }) => fetch(`https://task-server-five-alpha.vercel.app/editTask/${params.id}`)

      },



    ]
  },

]);
