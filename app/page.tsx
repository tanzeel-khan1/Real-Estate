// "use client";
// import React from "react";
// import Nav from "./component/Nav";
// import Hero from "./pages/Hero";
// import Page from "./property/page";
// import Center from "./pages/Center";
// import Cen from "./pages/Cen";
// import Proper from "./pages/Proper";
// import AboutPage from "./about/page"; 
// import Footer from "./pages/Footer";

// const page = () => {
//   return (
//     <div>
//       <Nav />

//       <div className="md:pl-20 pl-12 md:pr-14 pr-8">
//         <Hero />
//         <Page />       
//       </div>

//       <Center />
//       <Cen />
//       <Proper />

//       <AboutPage />  
//       <Footer  />
//     </div>
//   );
// };

// export default page;
"use client";
import React from "react";
import Nav from "./component/Nav";
import Hero from "./pages/Hero";
import Page from "./property/page";     // OK
import Center from "./pages/Center";
import Cen from "./pages/Cen";
import Proper from "./pages/Proper";
import AboutPage from "./about/page";   // FIXED
import Footer from "./pages/Footer";

const page = () => {
  return (
    <div>
      <Nav />

      <div className="md:pl-20 pl-12 md:pr-14 pr-8">
        <Hero />
        <Page />       
      </div>

      <Center />
      <Cen />
      <Proper />

      <AboutPage />  
      <Footer />
    </div>
  );
};

export default page;
