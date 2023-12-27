// Import necessary dependencies from React and react-router-dom
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

// Import CSS styles for the application
import './index.css';

// Import various page components for routing
import AboutMe from './Pages/AboutMe';
import Avocations from './Pages/Avocations';
import Projects from './Pages/Projects';
import NoPage from './Pages/NoPage';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import ReactDOM from 'react-dom/client';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

// Define constants for the project name and available screen dimensions
export const projectName = "Unspoken Words";
export const availableWidth = window.innerWidth;
export const availableHeight = window.innerHeight;


export const getAvailableWidth = () => {
  const availableWidth = window.innerWidth;

  if (availableWidth > 1920) {
    return 1920;
  } else {
    return availableWidth;
  }
};



export const getAvailableHeight = () =>{
  return window.innerHeight;
}

// Define an array of navigation entries with their corresponding paths and components
let navEntries = [
  { path: "/", element: <Home /> },         // Home page
  { path: "/aboutme", element: <AboutMe/> }, // About Me page
  { path: "/avocations", element: <Avocations /> }, // Avocations page
  { path: "/projects", element: <Projects /> },     // Projects page
  { path: "/contact", element: <Contact /> }          // Resume page
];

// Define the layout of the app, which includes a navigation bar and an outlet for rendering content
const AppLayout = () => {
  return (
    <>
      <div className="align-center">
        <NavigationBar />
      </div>
        <Outlet />
    </>
  );
}

// Create a router configuration using createBrowserRouter, specifying the layout and navigation entries
const router = createBrowserRouter([
  {
      element: <AppLayout />,    // Layout of the app
      errorElement: <NoPage />, // Component to render in case of a 404 error
      children: navEntries       // Array of navigation entries
  }
]);

// Create a root element for rendering the app into the HTML element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// Additional comments indicate where to measure performance or add analytics if needed
