import React, { useState } from "react";
import dynamic from "next/dynamic";
import Logo from "components/atoms/svgIcons/Logo";
import { NavLink } from "components/atoms/Link";
import { Button } from "components/atoms/Button";
import { TopNavStyle, TopNavContainer } from "./style";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

// Code Splitting
const MobileNav = dynamic(() => import("components/molecules/MobileNav"));

interface Props {}
const TopNav: React.FC<Props> = () => {
  // State
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <TopNavStyle>
        <TopNavContainer>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className="links">
            <NavLink label="Courses" path="/courses" />
            <NavLink label="Instructors" path="/instructors" />
            <NavLink label="About Us" path="/about-us" />
            <NavLink label="FAQ" path="/faq" />
            <NavLink
              label="Become An Instructor"
              path="/become-an-instructor"
            />
          </div>
          <div className="ml-auto btns">
            <Button
              onClick={() =>
                window.open("https://stevia-app.netlify.app/login", "_blank")
              }
              className="btn-white btn-md btn-rounded btn-nav-btn"
            >
              Login
            </Button>
            <Button
              onClick={() =>
                window.open("https://stevia-app.netlify.app/register", "_blank")
              }
              className="btn-black btn-md btn-rounded btn-nav-btn"
            >
              Signup
            </Button>
          </div>
          <div className="mobile-menu" onClick={() => setShowNav(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </TopNavContainer>
      </TopNavStyle>

      <AnimatePresence>
        {showNav && (
          <MobileNav key="mobile-nav" setShowNav={() => setShowNav(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;
