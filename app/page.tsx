
"use client";
import Image from "next/image";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
 <>
 <div className="  pt-5">
  <Navbar />
  <Hero />
  <Services />
  <Pricing />
  <ContactUs />
 
</div>

 </>
  );
}
