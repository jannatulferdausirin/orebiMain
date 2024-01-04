import React, { useRef } from "react";
import Navbar from '../Layouts/Navbar';
import SubHeader  from '../Layouts/SubHeader';
import Footer from '../Layouts/Footer';
import { Outlet } from "react-router-dom";

const Main = () => {
 

  return (
    <div >
      <Navbar/>
      <SubHeader />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
