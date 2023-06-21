import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// layout pages
import RootLayout from "./layout/RootLayout";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Help from "./pages/Help";



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path="Help" element={<Help />} />

      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

