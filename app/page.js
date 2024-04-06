"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import NavSec from "./components/NavSec";
import HeroSec from "./components/HeroSec";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import ChooseUs from "./components/Driving";
import Newsletter from "./components/Newsletter";
import Faq from "./components/Faq";
import Countents from "./components/Countents";
import Loader from "./components/Loder";
import Backtotop from "./components/BackTo top";

export default function Home() {
  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);


  return (
    <div>
      {data ? (
        <>
          <Loader />
        </>
      ) : (
        <div>
          <NavSec />
          <HeroSec />
          <Vision />
          <ChooseUs />
          <Countents />
          <Faq />
          <Newsletter />
          <Footer />
          <Backtotop />
        </div>
      )}
    </div>
  );
}
