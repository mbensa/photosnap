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
import ToggleSwitch from '../components/ToggleSwitch';
import Card from '../components/Card';

export default function Main() {
  return (
    <>
      <FeatureBox title="title" text="text" feature="embed" alt="image" />
      <ToggleSwitch />
      <Card
        alt="image"
        cardHeading="The Mountains"
        cardText="by John Appleseed"
        image="voyage"></Card>
    </>
  );
}
