import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";

//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Login from "./components/Login";
import Payment from "./components/Payment";
import PaymentTable from "./admin/Table";


const App = () => {

  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {

    theme === "light" ? setTheme("dark") : setTheme("light");

    localStorage.setItem('mode', theme)
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem('mode')

    if (storedTheme === 'light')
      setTheme('dark')
    else setTheme('light')

    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    // home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    // nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <BrowserRouter>
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <Routes>
          <Route path="/">
            <Route index element={<Index />} />
            <Route path="login" element={<Login />} />
            <Route path="admin">
              <Route path="payment" element={<Payment />} />
            </Route>
            <Route path="paidlist" element={<PaymentTable />} />

            {/* <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Home />
      <Free />
      <Release />
      <Like />
      <Signup />
      <Footer /> */}
    </div>
  );
}

export default App;
