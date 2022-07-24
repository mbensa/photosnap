import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureBox from '../components/FeatureBox';
import Section from '../components/Section';
import Beta from '../components/Beta';
import './features.css';
import { featuresData } from '../pages/featuresData';

export default function Features() {
  const features = featuresData.map((item) => {
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

  return (
    <>
      <Header />
      <section>
        <Section
          infoFirst
          line
          image="featuresHero"
          alt="person holidng a camera in his/her hand"
          title="FEATURES"
          message="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          darkBg></Section>
      </section>
      <section className="featuresContainer">{features}</section>
      <section>
        <Beta />
      </section>
      <Footer />
    </>
  );
}
