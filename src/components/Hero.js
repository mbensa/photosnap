import React from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import heroImage from '../assets/stories/mobile/moon-of-appalacia.jpg';
import './hero.css';

export default function Hero() {
  return (
    <div className="heroContainer">
      <img src={heroImage} className="heroImage" alt="hazy full moon" />
      <div className="heroTextContainer">
        <Text type="h5">LAST MONTH'S FEATURED STORY</Text>
        <Text type="h2" className="heroTitle">
          HAZY FULL MOON OF APPALACHIA
        </Text>
        <Text type="h5">
          <span className="heroDate">March 2nd 2020</span> by John AppleSeed
        </Text>
        <Text type="p" className="heroText">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </Text>
        <Button buttonClass="opaqueWhite" icon>
          READ THE STORY
        </Button>
      </div>
    </div>
  );
}
