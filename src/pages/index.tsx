import React from "react";
import Header from "components/organisms/Header";
import HeaderWhiteCard from "components/organisms/HeaderWhiteCard";
import BenefitSection from "components/pages/Home/BenefitSection";
import CategoriesSection from "components/pages/Home/CategoriesSection";
import VideoSection from "components/pages/Home/VideoSection";
import CoursesSection from "components/pages/Home/CoursesSection";
import EverybodySection from "components/pages/Home/EverybodySection";
import VacantCourseSection from "components/organisms/VacantCourseSection";
import PageAnimation from "components/templates/PageAnimation";

const IndexPage = () => (
  <>
    <PageAnimation key="home-page">
      <Header />
      <HeaderWhiteCard />
      <BenefitSection />
      <CategoriesSection />
      <VideoSection />
      <CoursesSection />
      <EverybodySection />
      <VacantCourseSection />
    </PageAnimation>
  </>
);

export default IndexPage;
