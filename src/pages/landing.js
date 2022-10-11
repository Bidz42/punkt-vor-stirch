import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import Contact from "../components/contact";
import Icons from "../components/icons";
import Intro from "../components/intro";
import Partners from "../components/partners";
import Statistics from "../components/statistics";
import Team from "../components/team";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    let hideTill = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hideTill) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="bg-zinc-50 h-100vh relative">
      <Intro />
      <Statistics />
      <Icons />
      <Team />
      <div className="bg-gray-100 mt-10 mb-0 py-10">
        <Partners />
        <Contact />
      </div>

      {isVisible && (
        <HashLink smooth to="/#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 h-10 bottom-10 right-1 md:bottom-10 md:right-1 lg:bottom-20 lg:right-10 fixed"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </HashLink>
      )}
    </div>
  );
};

export default Landing;