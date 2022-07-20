import React, { useState, useCallback, useEffect } from 'react';
import desktopStories from '../assets/home/desktop/beautiful-stories.jpg';
import desktopCreate from '../assets/home/desktop/create-and-share.jpg';
import desktopDesigned from '../assets/home/desktop/designed-for-everyone.jpg';
import desktopFeaturesHero from '../assets/features/desktop/hero.jpg';
import desktopPricingHero from '../assets/pricing/desktop/hero.jpg';
import desktopBeta from '../assets/shared/desktop/bg-beta.jpg';
import tabletStories from '../assets/home/tablet/beautiful-stories.jpg';
import tabletCreate from '../assets/home/tablet/create-and-share.jpg';
import tabletDesigned from '../assets/home/tablet/designed-for-everyone.jpg';
import tabletFeaturesHero from '../assets/features/tablet/hero.jpg';
import tabletPricingHero from '../assets/pricing/tablet/hero.jpg';
import tabletBeta from '../assets/shared/tablet/bg-beta.jpg';
import mobileStories from '../assets/home/mobile/beautiful-stories.jpg';
import mobileCreate from '../assets/home/mobile/create-and-share.jpg';
import mobileDesigned from '../assets/home/mobile/designed-for-everyone.jpg';
import mobileFeaturesHero from '../assets/features/mobile/hero.jpg';
import mobilePricingHero from '../assets/pricing/mobile/hero.jpg';
import mobileBeta from '../assets/shared/mobile/bg-beta.jpg';

const imgDesktopUrls = {
  stories: desktopStories,
  create: desktopCreate,
  designed: desktopDesigned,
  featuresHero: desktopFeaturesHero,
  pricingHero: desktopPricingHero,
  beta: desktopBeta,
};

const imgTabletUrls = {
  stories: tabletStories,
  create: tabletCreate,
  designed: tabletDesigned,
  featuresHero: tabletFeaturesHero,
  pricingHero: tabletPricingHero,
  beta: tabletBeta,
};

const imgMobileUrls = {
  stories: mobileStories,
  create: mobileCreate,
  designed: mobileDesigned,
  featuresHero: mobileFeaturesHero,
  pricingHero: mobilePricingHero,
  beta: mobileBeta,
};

export default function Image(props) {
  const { alt, image, className } = props;

  const imgDesktopUrl = imgDesktopUrls[image];
  const imgTabletUrl = imgTabletUrls[image];
  const imgMobileUrl = imgMobileUrls[image];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let imageUrl;

  if (windowWidth < 768) {
    imageUrl = imgMobileUrl;
  } else if (windowWidth >= 768 && windowWidth < 1280) {
    imageUrl = imgTabletUrl;
  } else {
    imageUrl = imgDesktopUrl;
  }

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return <img src={imageUrl} alt={alt} className={className} />;
}
