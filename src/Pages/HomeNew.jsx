import React, { useEffect, useRef, useState } from "react";

import DottedDiv from "../Components/DottedDiv/DottedDiv";
import ButtonPrimary from "../Components/ButtonPrimary/ButtonPrimary";
import AnimatedPage from "../Components/Animated/AnimatedPage";
import Typed from "react-typed";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { getCurrentPageData } from "../firebase/manageRealtimeDatabase.mjs";
import gitHubMark from "../assets/social-media-logo-marks/git_hub_logo_mark.svg";
import linkedInMark from "../assets/social-media-logo-marks/linked_in_logo_mark.svg";
import instagramMark from "../assets/social-media-logo-marks/instagram_logo_mark.svg";

const Home = () => {
  const navigate = useNavigate();

  const [dottedDivisionWidth, setDottedDivisionWidth] = useState("70"); 
  const [displayPicture, setDisplayPicture] = useState("");
  const [isMobile, setIsMobile] = useState(true);
  const typedStrings = useRef(["Aniruddhsinh Jadeja", "A Web Developer"]);



  const handleResize = () => {
    setIsMobile(window.outerWidth < 768);
    try {
      let introArticle = document.getElementById("dottedDivContainer");
      setDottedDivisionWidth(introArticle.offsetWidth);
    }
    catch (error) {
      console.log("Error in setting dottedDivisionWidth");
    } 
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();

    getCurrentPageData()
      .then((data) => {
        setDisplayPicture(data.displayPictureUrl);
      })
      .catch((error) => {
        navigate("/error");
      });
  }, []);

  return (
    <AnimatedPage>
      <section
        id="homePage"
        style={{
          minHeight:'550px',
          height:  `calc(100svh - 194px)`,
          maxHeight:  `calc(100svh - 194px)`,
        }}
        className={`px-10 lg:px-0  text-[--color-primary-white] align-center`}
      >
        <p className="w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]">
          {" "}
          H o m e
        </p>
        <div
          id="articlesWrapper"
          className="lg:grid lg:grid-cols-2 flex-col relative align-center w-full"
          style={{
            height: isMobile ? "100%" : "inherit",
            maxHeight: `100%`,
           
          }}
        >
          <article
            id="displayPictureArticle"
            style={{
              minHeight: "100%",
              height: "90%",
              maxHeight:  "100%",
              width: "auto",
            }}
            className="lg:relative absolute top-0 align-center order-1 lg:order-2"
          >
            <img
              id="displayPicture"
              src={displayPicture}
              style={{
                objectFit: "contain",
                mixBlendMode: "lighten",
                height: 'inherit',
                maxHeight: `100%`,
                width: `auto`,
              }}
            />
          </article>

          <article
            id="introArticle"
            style={{
              height: isMobile ? "auto" : "70%",
              width: "100%",
              maxHeight: `100%`,
            }}
            className="lg:relative absolute bottom-0 order-2 lg:order-1 align-center"
          >
            <div id="dottedDivContainer" className="w-11/12 lg:w-3/4 block">
              <p className="font-inter mb-4 text-[var(--color-primary-white)] sm:-mt-4 sm3:mt-0 text-xs sm2:text-lg lg:text-lg xl:text-xl text-center lg:text-left">
                Hi I am,
              </p>

              <p
                id="introText"
                className="font-reef text-center mt-4 sm:mb-2 mb-4 text-[var(--color-primary-white)] text-sm tracking-[4px] sm:text-[18px] sm2:text-xl sm3:text-2xl xl:text-4xl lg:text-left min-w-fit sm:-mt-4"
              >
                <Typed
                  strings={typedStrings.current}
                  typeSpeed={50}
                  backSpeed={20}
                  className="text-[var(--color-primary-accent)]"
                  loop
                />
              </p>

         
              <DottedDiv className="align-center" 
              height={
                isMobile 
                ? ( 95 )
                : (150)} 
                width={dottedDivisionWidth} />
       
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="sm:-mt-4 sm2:mt-0">
                  <ButtonPrimary
                    text="Know Me More"
                    path="aboutme"
                    variant="textBordered"
                    border={false}
                  />
                </div>

                <div className="flex justify-center lg:justify-end text-xs sm:text-base text-[var(--color-primary-white)] pb-0 pt-6">
                  <a href="https://www.github.com/AniJadeja" target="_blank">
                    <img src={gitHubMark} className="h-8 mb-0 mt-auto" />
                  </a>
                  <a
                    href="https://www.instagram.com/_the_pen_of_dreams_/"
                    target="_blank"
                  >
                    <img
                      src={instagramMark}
                      className="h-8 ml-5 mb-0 mt-auto"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anijadeja/"
                    target="_blank"
                  >
                    <img src={linkedInMark} className="h-8 ml-5 mb-0 mt-auto" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Home;
