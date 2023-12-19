import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Advertisement from './Pages/Advertisement/Advertisement'
import Contact from './Pages/Contact/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>  
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/advertisement",
        element: <Advertisement/>
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
