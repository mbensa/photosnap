import React from 'react';
import Text from './Text';
import Button from './Button';
import './infoSection.css';

export default function InfoSection(props) {
  const { title, message, buttonClass, btnText, dark, darkBg } = props;

  const styles = {
    backgroundColor: darkBg ? '#000000' : '#FFFFFF',
    color: darkBg ? '#FFFFFF' : '#000000',
  };

  return (
    <div className="infoSectionContainer" style={styles}>
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
