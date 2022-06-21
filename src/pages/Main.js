import React from 'react';
import Text from '../components/Text';
import Image from '../components/Image';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Link from '../components/Link';
import Social from '../components/Social';
import Icon from '../components/Icon';
import InfoSection from '../components/InfoSection';
import FeatureBox from '../components/FeatureBox';
import PlanBox from '../components/PlanBox';

export default function Main() {
  return (
    <>
      <Button icon={false} style="darkBtn">
        my button
      </Button>
      <PlanBox
        style="darkBtn"
        btnText="banana"
        heading="heading"
        text="text"
        pricing="pricing"
        subtext="subtext"
      />
    </>
  );
}
