import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// layout pages
import RootLayout from "./layout/RootLayout";
import HomeLayout from "./layout/HomeLayout";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Help from "./pages/Help";
import Paradise from "./pages/home/Paradise";
import Explore from "./pages/home/Explore";


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomeLayout />} >
          <Route path="/" element={<Paradise />} />
          <Route path="explore" element={<Explore />} />
        </Route>
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

