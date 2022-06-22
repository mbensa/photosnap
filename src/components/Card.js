import React from 'react';
import Text from './Text';
import Button from './Button';

export default function Card(props) {
  const { image, alt, cardHeading, cardText } = props;

  return (
    <div>
      <Text type="h3">{cardHeading}</Text>
      <Text type="p">{cardText}</Text>
      <hr />
      <Button style="opaqueWhite" icon={true}>
        READ STORY
      </Button>
    </div>
  );
}
