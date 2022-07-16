import React from 'react';
import './main.css';
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
import Header from '../components/Header';

export default function Main() {
  return (
    <>
      <Header />
      <InfoSection
        title="CREATE AND SHARE YOUR PHOTO STORIES."
        message="Photosnap is a plafrom for photographers and vidual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonClass="opaqueDark"
        btnText="GET AN INVITE"
        dark="true"
      />

      <ToggleSwitch />
      <div className="cardContainer">
        <Card
          alt="image"
          cardHeading="The Mountains"
          cardAuthor="by John Appleseed"
          cardDate="Apr 7th 2000"
          image="voyage"></Card>
      </div>
      <div>
        <PlanBox
          heading="Basic"
          text="Includes basic usage of our platform."
          pricing="$19.00"
          subtext="per month"
          btnText="PICK PLAN"
          inputName="radio1"
          inputId="planBox1"
        />
        <PlanBox
          heading="Basic"
          text="Includes basic usage of our platform."
          pricing="$19.00"
          subtext="per month"
          btnText="PICK PLAN"
          inputName="radio1"
          inputId="planBox2"
        />
      </div>
    </>
  );
}
