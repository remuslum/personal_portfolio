import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import HomePage from "./components/UI/HomePage/HomePage";
import NavBar from "./components/UI/NavBar/NavBar";
import type { FC } from "react";
import Education from "./components/UI/Education/Education";
import Experience from "./components/UI/Experience/Experience";
import './styles/fonts.css'

const Layout:FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#0F172B]">
      <NavBar />
      <Outlet />
    </main>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "", element: <HomePage />},
      { path: "/education", element: <Education />},
      { path: "/experience", element: <Experience />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
