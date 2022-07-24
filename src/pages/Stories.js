import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Hero from '../components/Hero';
import { data } from '../pages/data';
import '../pages/stories.css';

export default function Stories() {
  const cards = data.map((item) => {
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
      <Hero />
      <section className="cardsContainer">{cards}</section>
      <Footer />
    </>
  );
}
