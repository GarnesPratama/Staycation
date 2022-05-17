import React from "react";
import Header from "./parts/header";
import Section from "./Details/section";
import SectionImage from "./Details/sectionImage";
import SectionDetail from "./Details/sectionDetail";
import SectionApartment from "./Details/sectionApartment";
import Review from "./Details/review";
import Footer from "./parts/footer.tsx";

export default function Details() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Section />
        <SectionImage />
        <SectionDetail />
        <SectionApartment />
        <Review />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
