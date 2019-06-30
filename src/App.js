import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./Containers/LandingPage/LandingPage";
import Features from "./Containers/Features/Features";
import OurCourses from "./Containers/OurCourses/OurCourses";
import Testimonial from "./Containers/Testimonial/Testimonial";
import PopularCompanies from "./Containers/PopularCompanies/PopularCompanies";
import Footer from "./Containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Layout>
        <LandingPage />
        <Features />
        <OurCourses />
        <Testimonial />
        <PopularCompanies />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
