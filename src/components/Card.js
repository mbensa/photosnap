import React from 'react';
import Text from './Text';
import Button from './Button';
import voyage from '../assets/stories/desktop/18-days-voyage.jpg';
import Image from './Image';

const cardImagesUrls = {
  voyage: voyage,
}
export default function Card(props) {
  const { image, alt, cardHeading, cardText } = props;
  
  const cardImageUrl = cardImagesUrls[image];

  return (
    <div>
      <Image src={cardImageUrl} alt={alt}/>
      <Text type="h3">{cardHeading}</Text>
      <Text type="p">{cardText}</Text>
      <hr />
      <Button style="opaqueWhite" icon={true}>
        READ STORY
      </Button>
    </div>
  );
}
