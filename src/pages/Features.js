import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureBox from '../components/FeatureBox';
import Section from '../components/Section';
import Beta from '../components/Beta';
import './features.css';

export default function Features() {
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
        <FeatureBox
          feature="domain"
          alt="image of a search box"
          title="Custom Domain"
          text="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"></FeatureBox>
        <FeatureBox
          feature="exposure"
          alt="image of a hand dragging a file"
          title="Boost Your Exposure"
          text="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."></FeatureBox>
        <FeatureBox
          feature="dragDrop"
          alt="computer image"
          title="Drag & Drop Image"
          text="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."></FeatureBox>
      </section>
      <section>
        <Beta />
      </section>
      <Footer />
    </>
  );
}
