import React from 'react';
import './main.css';
import FeatureBox from '../components/FeatureBox';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import CompareBox from '../components/CompareBox';

export default function Main() {
  return (
    <>
      <Header />
      <section>
        <Section
          infoFirst
          line
          darkBg
          image="create"
          alt="image of a person standing at the end of a pier"
          title="CREATE AND SHARE YOUR PHOTO STORIES"
          message="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          button
          buttonClass="opaqueWhite"
          btnText="GET AN INVITE"></Section>
        <Section
          image="stories"
          alt="computer and some books on the desk"
          title="BEAUTIFUL STORIES EVERY TIME"
          message="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          button
          buttonClass="opaqueDark"
          btnText="VIEW THE STORIES"
          dark></Section>
        <Section
          infoFirst
          image="designed"
          alt="a man with a camera in his hand"
          title="DESIGNED FOR EVERYONE"
          message="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
          button
          buttonClass="opaqueDark"
          btnText="VIEW THE STORIES"
          dark></Section>
      </section>
      <section className="cardContainerMain">
        <Card
          image="mountains"
          alt="mountains"
          cardHeading="The Mountains"
          cardAuthor="by John Appleseed"></Card>
        <Card
          image="city"
          alt="big city"
          cardHeading="Sunset Cityscapes"
          cardAuthor="by Benjamin Cruz"></Card>
        <Card
          image="voyage"
          alt="person hiking"
          cardHeading="18 Days Voyage"
          cardAuthor="by Alexei Borodin"></Card>
        <Card
          image="architecturals"
          alt="skyscraper"
          cardHeading="Architecturals"
          cardAuthor="by Samantha Brooke"></Card>
      </section>
      <section className="featuresContainer">
        <FeatureBox
          feature="responsive"
          alt="image of a mobile and tablet"
          title="100% Responsive"
          text="No matter which device you’re on, our site is fully responsive and stories look beautiful on any screen."></FeatureBox>
        <FeatureBox
          feature="noLimit"
          alt="infinite loop"
          title="No Photo Upload Limit"
          text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."></FeatureBox>
        <FeatureBox
          feature="embed"
          alt="image of a computer and social media icons"
          title="Available to Embed"
          text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "></FeatureBox>
      </section>
      <Footer />
      <CompareBox />
    </>
  );
}
