import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import HomePage from "./components/UI/HomePage/HomePage";
import NavBar from "./components/UI/NavBar/NavBar";
import type { FC } from "react";

const Layout:FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
