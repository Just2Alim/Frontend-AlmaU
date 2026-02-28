import React, { Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import { Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Loading from "./components/Loading";
import ErrorBoundary from "./ErrorBoundary";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));


function ErrorFallback() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Something went wrong.</h2>
      <p>Unable to load the requested page.</p>
    </div>
  );
}


function Layout() {
  return (
    <div>
      <nav>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/dashboard" style={{ margin: "0 1rem" }}>Dashboard</Link>
        <Link to="/profile" style={{ margin: "0 1rem" }}>Profile (crash test)</Link>
        <Link to="/settings" style={{ margin: "0 1rem" }}>Settings</Link>
      </nav>
      
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Home />},

      {
        path: "dashboard",
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "profile",
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<Loading/>}>
              <Profile />
            </Suspense>
          /</ErrorBoundary>
        ),
      },
      {
        path: "settings",
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          /</ErrorBoundary>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);