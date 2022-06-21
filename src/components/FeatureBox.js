import React from 'react';
import Text from './Text';
import { ReactComponent as Responsive } from '../assets/features/desktop/responsive.svg';
import { ReactComponent as NoLimit } from '../assets/features/desktop/no-limit.svg';
import { ReactComponent as Embed } from '../assets/features/desktop/embed.svg';
import { ReactComponent as Exposure } from '../assets/features/desktop/boost-exposure.svg';
import { ReactComponent as Domain } from '../assets/features/desktop/custom-domain.svg';
import { ReactComponent as DragDrop } from '../assets/features/desktop/drag-drop.svg';

const images = {
  responsive: Responsive,
  noLimit: NoLimit,
  embed: Embed,
  exposure: Exposure,
  domain: Domain,
  dragDrop: DragDrop,
};

export default function FeatureBox(props) {
  const { title, text, feature } = props;
  const FeatureImage = images[feature];

  return (
    <div>
      <FeatureImage />
      <Text type="h3">{title}</Text>
      <Text type="p">{text}</Text>
    </div>
  );
}
