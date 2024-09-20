import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import SignUp from "./components/SignUp";
import NavbarMain from "./components/NavbarMain";
import Dashboard from "./components/Dashboard/index";
import Education from "./components/Education/index";
import Marketplace from "./components/Marketplace/index";
import Community from "./components/Community/index";
import Login from "./components/Login";
import Footer from "./components/Footer";
import BigLoader from "./components/BigLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <NavbarMain />
          <Outlet />
          <BigLoader />
          <Footer />
        </>
      }
    >
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/education" element={<Education />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/community" element={<Community />} />
      {/* <Route path="contact" element={<Contact />} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} loader={redirectIfUser} />
        <Route path="logout" action={logoutUser} />
      </Route> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
