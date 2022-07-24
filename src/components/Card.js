import React, { useCallback, useEffect, useState } from 'react';
import Text from './Text';
import Button from './Button';
import './card.css';
import desktopVoyage from '../assets/stories/desktop/18-days-voyage.jpg';
import desktopArchitecturals from '../assets/stories/desktop/architecturals.jpg';
import desktopWaves from '../assets/stories/desktop/behind-the-waves.jpg';
import desktopWaters from '../assets/stories/desktop/calm-waters.jpg';
import desktopCity from '../assets/stories/desktop/cityscapes.jpg';
import desktopForest from '../assets/stories/desktop/dark-forest.jpg';
import desktopAfrica from '../assets/stories/desktop/king-on-africa.jpg';
import desktopDreams from '../assets/stories/desktop/land-of-dreams.jpg';
import desktopMilky from '../assets/stories/desktop/milky-way.jpg';
import desktopMoon from '../assets/stories/desktop/moon-of-appalacia.jpg';
import desktopMountains from '../assets/stories/desktop/mountains.jpg';
import desktopSea from '../assets/stories/desktop/rage-of-the-sea.jpg';
import desktopRun from '../assets/stories/desktop/running-free.jpg';
import desktopSomwarpet from '../assets/stories/desktop/somwarpet.jpg';
import desktopTrip from '../assets/stories/desktop/trip-to-nowhere.jpg';
import desktopCorners from '../assets/stories/desktop/unforeseen-corners.jpg';
import desktopTour from '../assets/stories/desktop/world-tour.jpg';
import mobileVoyage from '../assets/stories/mobile/18-days-voyage.jpg';
import mobileArchitecturals from '../assets/stories/mobile/architecturals.jpg';
import mobileWaves from '../assets/stories/mobile/behind-the-waves.jpg';
import mobileWaters from '../assets/stories/mobile/calm-waters.jpg';
import mobileCity from '../assets/stories/mobile/cityscapes.jpg';
import mobileForest from '../assets/stories/mobile/dark-forest.jpg';
import mobileAfrica from '../assets/stories/mobile/king-on-africa.jpg';
import mobileDreams from '../assets/stories/mobile/land-of-dreams.jpg';
import mobileMilky from '../assets/stories/mobile/milky-way.jpg';
import mobileMoon from '../assets/stories/mobile/moon-of-appalacia.jpg';
import mobileMountains from '../assets/stories/mobile/mountains.jpg';
import mobileSea from '../assets/stories/mobile/rage-of-the-sea.jpg';
import mobileRun from '../assets/stories/mobile/running-free.jpg';
import mobileSomwarpet from '../assets/stories/mobile/somwarpet.jpg';
import mobileTrip from '../assets/stories/mobile/trip-to-nowhere.jpg';
import mobileCorners from '../assets/stories/mobile/unforeseen-corners.jpg';
import mobileTour from '../assets/stories/mobile/world-tour.jpg';

const cardDesktopUrls = {
  voyage: desktopVoyage,
  architecturals: desktopArchitecturals,
  waves: desktopWaves,
  waters: desktopWaters,
  city: desktopCity,
  forest: desktopForest,
  africa: desktopAfrica,
  dreams: desktopDreams,
  milky: desktopMilky,
  moon: desktopMoon,
  mountains: desktopMountains,
  sea: desktopSea,
  run: desktopRun,
  somwarpet: desktopSomwarpet,
  trip: desktopTrip,
  corners: desktopCorners,
  tour: desktopTour,
};

const cardMobileUrls = {
  voyage: mobileVoyage,
  architecturals: mobileArchitecturals,
  waves: mobileWaves,
  waters: mobileWaters,
  city: mobileCity,
  forest: mobileForest,
  africa: mobileAfrica,
  dreams: mobileDreams,
  milky: mobileMilky,
  moon: mobileMoon,
  mountains: mobileMountains,
  sea: mobileSea,
  run: mobileRun,
  somwarpet: mobileSomwarpet,
  trip: mobileTrip,
  corners: mobileCorners,
  tour: mobileTour,
};

export default function Card(props) {
  const { image, cardHeading, cardAuthor, cardDate } = props;

  const cardDesktopUrl = cardDesktopUrls[image];
  const cardMobileUrl = cardMobileUrls[image];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 768 ? cardDesktopUrl : cardMobileUrl;

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <div className="cardBg" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div id="overlay"></div>
      <div className="cardTextContainer">
        <div className="cardText">
          <Text type="p" className="cardDate">
            {cardDate}
          </Text>
          <Text type="h4">{cardHeading}</Text>
          <Text type="p" className="cardAuthor">
            {cardAuthor}
          </Text>
          <hr />
          <Button buttonClass="opaqueWhite cardBtn" icon={true}>
            READ STORY
          </Button>
        </div>
      </div>
    </div>
  );
}
