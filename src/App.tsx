// import './App.css'
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ThankYou from "./pages/ThankYou";
import { GoToTopButton } from "./components/GoToTopButton";
import PortfolioPage from "./pages/PorfolioPage";
import OurProcess from "./components/OurProcess";
import ProjectDetail from "./pages/ProjectDetail";
import ContactUsPage from "./pages/ContactUs";
import AboutUsPage from "./pages/AboutUs";
import WhyUsPage from "./pages/WhyUs";

function App() {
  const [windowSize, setwindowSize] = useState(window.screen.width);
  const [name, setName] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setwindowSize(window.screen.width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = [
    {
      path: "/",
      element: <Home windowSize={windowSize} setName={setName} />,
    },
    {
      path: "/ContactUs",
      element: <ContactUsPage setName={setName} />,
    },
    {
      path: "/Portfolio",
      element: <PortfolioPage/>
    },
    {
      path: "/WhoAreWe",
      element: <AboutUsPage />,
    },
    {
      path: "/WhyUs",
      element: <WhyUsPage />,
    },
    {
      path: "/ThankYou",
      element: <ThankYou name={name}/>
    },
    {
      path: "/OurProcess",
      element: <OurProcess/>
    },
    {
      path: "/projects/:slug",
      element: <ProjectDetail/>
    },
  ];

  return (
    <div id='app' className="h-screen flex flex-col justify-between">
      <section>
        <Navbar />
      </section>
      <Routes>
        {router.map((x, i) => (
          <Route key={i} path={x.path} element={x.element}></Route>
        ))}
      </Routes>
      <section className="justify-self-end">
        <Footer />
      </section>
      <div className="fixed bottom-10 right-10  md:bottom-20 md:right-20 z-10">
        <GoToTopButton/>
      </div>
    </div>
  );
}

export default App;
