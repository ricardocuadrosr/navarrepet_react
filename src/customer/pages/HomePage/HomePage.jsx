import React from 'react';
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import Avvvatars from "avvvatars-react";
import HomeSectionCarousel from '../../components/Homesectioncarousel/HomeSectionCarousel';
import Banner from '../../components/Banner/Banner';
import BannerCategory from '../../components/BannerCategory/BannerCategory';
import HomeSectionNoticeCard from '../../components/HomeSectionNoticeCard/HomeSectionNoticeCard';
import { birds, felines } from '../../../data/navarretepet';
import SectionBrand from '../../components/Brand/SectionBrand';

export default function HomePage() {
  return (
    <div>
      <MainCarousel/>
      <Banner/>
      <BannerCategory/>
      {/* <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={felines} sectionName={"Felinos"}/>
        <HomeSectionCarousel data={birds} sectionName={"Aves"}/>

      </div> */}
      <HomeSectionNoticeCard/> 
      <SectionBrand/>
    </div>
  );
};

