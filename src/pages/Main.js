import React from 'react';
import './main.css';
import FeatureBox from '../components/FeatureBox';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { featuresData } from '../pages/featuresData';
import { data } from '../pages/data';

export default function Main() {
  const features = featuresData.slice(0, 3).map((item) => {
    return (
      <FeatureBox
        key={item.id}
        feature={item.feature}
        title={item.title}
        text={item.text}
        alt={item.alt}
      />
    );
  });

  const cardsMain = data.slice(0, 4).map((item) => {
    return (
      <Card
        key={item.id}
        image={item.bgImage}
        cardHeading={item.title}
        cardAuthor={item.author}
        cardDate={item.date}
      />
    );
  });

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
      <section className="cardContainerMain">{cardsMain}</section>
      <section className="featuresContainerMain">{features}</section>
      <Footer />
    </>
  );
}
