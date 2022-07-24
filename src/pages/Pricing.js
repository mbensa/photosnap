import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Beta from '../components/Beta';
import Section from '../components/Section';
import PlanBox from '../components/PlanBox';
import ToggleSwitch from '../components/ToggleSwitch';
import CompareBox from '../components/CompareBox';
import '../pages/pricing.css';

export default function Pricing() {
  const [active, setActive] = useState('');

  const handleChange = (e) => {
    console.log(e);

    const { id } = e.target;

    if (id !== active) {
      setActive(id);
    }
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <>
      <Header />
      <section>
        <Section
          infoFirst
          darkBg
          line
          image="pricingHero"
          alt="woman taking a photo with sunset behing"
          title="PRICING"
          message="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."></Section>
      </section>
      <section className="planContainer">
        <ToggleSwitch onToggle={handleToggle} isToggled={isToggled} />
        <div className="planBoxOuterContainer">
          <PlanBox
            planBoxContainerClass="planBoxContainer"
            heading="Basic"
            text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            pricing={isToggled ? '190.00' : '19.00'}
            subtext="per month"
            btnText="PICK PLAN"
            inputName="radio1"
            inputId="planBox1"
            onChange={handleChange}
            checked={active === 'planBox1'}
          />
          <PlanBox
            planBoxContainerClass="planBoxContainer"
            heading="Pro"
            text="More advanced features available. Recommended for photography veterans and professionals."
            pricing={isToggled ? '390.00' : '39.00'}
            subtext="per month"
            btnText="PICK PLAN"
            inputName="radio1"
            inputId="planBox2"
            onChange={handleChange}
            checked={active === 'planBox2'}
          />
          <PlanBox
            planBoxContainerClass="planBoxContainer"
            heading="Business"
            text="Additional features available such as more detailed metrics. Recommended for business owners."
            pricing={isToggled ? '990.00' : '99.00'}
            subtext="per month"
            btnText="PICK PLAN"
            inputName="radio1"
            inputId="planBox3"
            onChange={handleChange}
            checked={active === 'planBox3'}
          />
        </div>
      </section>
      <section className="compareBoxContainer">
        <CompareBox />
      </section>
      <Beta />
      <Footer />
    </>
  );
}
