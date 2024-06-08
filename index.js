import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";

//const router = createBrowserRouter([
//  {
//    path: "/",
//    element: <Layout />,
//    children: [
//      {
//        path: "",
//        element: <Home />,
//      },
//      {
//        path: "About",
//        element: <About />,
//      },
//      {
//        path: "Contact",
//        element: <Contact />,
//      },
//    ],
//  },
//]);

// 2ND METHOD FOR CREATING ROUTER
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/:UserId" element={<User />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
