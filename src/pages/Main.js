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
      <InfoSection
        title="CREATE AND SHARE YOUR PHOTO STORIES."
        message="Photosnap is a plafrom for photographers and vidual storytellers. We make it easy to share photos, tell stories and connect with others."
        style="opaqueDark"
        btnText="GET AN INVITE"
        dark="true"
      />

      <ToggleSwitch />
      <Card
        alt="image"
        cardHeading="The Mountains"
        cardAuthor="by John Appleseed"
        cardDate="Apr 7th 2000"
        image="voyage"></Card>
    </>
  );
}
