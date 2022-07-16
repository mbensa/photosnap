import React, { useState } from 'react';
import Text from './Text';
import Button from './Button';
import './planBox.css';

export default function PlanBox(props) {
  const {
    heading,
    text,
    pricing,
    subtext,
    btnText,
    inputName,
    inputId,
    planBoxContainerClass,
  } = props;

  return (
    <div className={planBoxContainerClass}>
      <input type="radio" name={inputName} id={inputId} />
      <label for={inputId} className="planBoxLabel">
        <hr className="planBoxLine" />
        <Text type="h2" className="planBoxHeading">
          {heading}
        </Text>
        <Text type="p" className="planBoxText">
          {text}
        </Text>
        <Text type="h2" className="planBoxPricing">
          {pricing}
        </Text>
        <Text type="p" className="planBoxSubtext">
          {subtext}
        </Text>
        <Button buttonClass="darkBtn" icon={false}>
          {btnText}
        </Button>
      </label>
    </div>
  );
}
