// "use client";
// import React from "react";
// import Nav from "./component/Nav";
// import Hero from "./pages/Hero";
// import Page from "./property/page";
// import Center from "./pages/Center";
// import Cen from "./pages/Cen";
// import Proper from "./pages/Proper";
// import Page from "@/app/about/Page"

// const page = () => {
//   return (
//     <div>
//       <Nav />
//       <div className="md:pl-24 pl-12 md:pr-14 pr-8">
//         <Hero />
//         <Page />
//       </div>
//       <Center />
//       <Cen />
//       <Proper />
//       <Page/>
//     </div>
//   );
// };

// export default page;
"use client";
import React from "react";
import Nav from "./component/Nav";
import Hero from "./pages/Hero";
import Page from "./property/page";
import Center from "./pages/Center";
import Cen from "./pages/Cen";
import Proper from "./pages/Proper";
import AboutPage from "@/app/about/Page"; // 👈 Name changed

const page = () => {
  return (
    <div>
      <Nav />

      <div className="md:pl-24 pl-12 md:pr-14 pr-8">
        <Hero />
        <Page />        {/* property/page */}
      </div>

      <Center />
      <Cen />
      <Proper />

      <AboutPage />     {/* about/Page */}
    </div>
  );
};

export default page;
