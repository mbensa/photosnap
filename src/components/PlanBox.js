import React, { useRef } from 'react';
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
    checked,
    onChange,
  } = props;

  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();

    if (!inputRef.current.checked) {
      inputRef.current.checked = true;
    }
  };

  return (
    <div className={planBoxContainerClass}>
      <input
        ref={inputRef}
        type="radio"
        name={inputName}
        id={inputId}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={inputId} className="planBoxLabel">
        <Text type="h3" className="planBoxHeading">
          {heading}
        </Text>
        <Text type="p" className="planBoxText">
          {text}
        </Text>
        <Text type="h3" className="planBoxPricing">
          {pricing}
        </Text>
        <Text type="p" className="planBoxSubtext">
          {subtext}
        </Text>
        <Button buttonClass="darkBtn btn" icon={false} onClick={handleClick}>
          {btnText}
        </Button>
      </label>
    </div>
  );
}
