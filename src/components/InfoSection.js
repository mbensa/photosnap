import React from 'react';
import Text from './Text';
import Button from './Button';
import './infoSection.css';

export default function InfoSection(props) {
  const { title, message, buttonClass, btnText, dark, infoSectionClass } =
    props;

  return (
    <div className={infoSectionClass}>
      <Text type="h1">{title}</Text>
      <Text type="p" className="infoSectionMessage">
        {message}
      </Text>
      <Button buttonClass={buttonClass} icon={true} dark={dark}>
        {btnText}
      </Button>
    </div>
  );
}
