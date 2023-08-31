import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './index.css';
import AboutMe from './Pages/AboutMe';
import Avocations from './Pages/Avocations';
import Projects from './Pages/Projects';
import NoPage from './Pages/NoPage';
import Home from "./Pages/Home";
import NavigationBar from "./Components/NavigationBar";
import ReactDOM from 'react-dom/client';
import Resume from './Pages/Resume'

let navEntries = [{ path: "/", element: <Home /> },
{ path: "/aboutme", element: <AboutMe /> },
{ path: "/avocations", element: <Avocations /> },
{ path: "/projects", element: <Projects /> },
{ path: "/resume", element: <Resume /> }
];


const AppLayout = () => {
  return (
    <>
      <NavigationBar/>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
      element: <AppLayout />,
      errorElement: <NoPage />,
      children: navEntries
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
