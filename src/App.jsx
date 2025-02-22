import {
  createBrowserRouter,
  Navigate,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  
  let router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
