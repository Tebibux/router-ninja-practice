import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// layout pages
import RootLayout from "./layout/RootLayout";
import HomeLayout from "./layout/HomeLayout";
import HelpLayout from "./layout/HelpLayout";
// pages
import Contact from "./pages/Contact";
import About from "./pages/About";
import Paradise from "./pages/home/Paradise"; // serves us Home page
import Explore from "./pages/home/Explore";
import Faq from "./pages/help/Faq"; // serves us Help Home page
import Message from "./pages/help/Message";

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
        <Route path="Help" element={<HelpLayout />} >
          <Route index element={<Faq />} />
          <Route path="Message" element={<Message />} />
        </Route>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

