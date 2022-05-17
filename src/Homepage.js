import React, { Component } from "react";
import Placeholder from "./Homepage/placeholder";
import Header from "./parts/header";
import Section from "./Homepage/section";
import SectionHotels from "./Homepage/sectionHotels";
import SectionApartment from "./Homepage/sectionApartment";
import Review from "./Homepage/review";
import Footer from "./Homepage/footer";

export default function Homepage() {
  return (
    <div>
      <>
        <header>
          <Header />
        </header>
        <main>
          <Placeholder />
          <Section />
          <SectionHotels />
          <SectionApartment />
          <Review />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </div>
  );
}
