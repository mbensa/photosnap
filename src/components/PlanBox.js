import React from 'react';
import Text from './Text';
import Button from './Button';

export default function PlanBox(props) {
  const { style, heading, text, pricing, subtext, btnText } = props;

  return (
    <div>
      <Text type="h2">{heading}</Text>
      <Text type="p">{text}</Text>
      <Text type="h2">{pricing}</Text>
      <Text type="p">{subtext}</Text>
      <Button style={style} icon={false}>
        {btnText}
      </Button>
    </div>
  );
}
