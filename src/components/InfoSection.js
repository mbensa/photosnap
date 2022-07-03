import React from 'react';
import Text from './Text';
import Button from './Button';

export default function InfoSection(props) {
  const { title, message, buttonClass, btnText, dark } = props;

  return (
    <div>
      <Text type="h1">{title}</Text>
      <Text type="p">{message}</Text>
      <Button buttonClass={buttonClass} icon={true} dark={dark}>
        {btnText}
      </Button>
    </div>
  );
}
