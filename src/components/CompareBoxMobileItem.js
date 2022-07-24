import React from 'react';
import Text from './Text';

export default function CompareBoxMobileItem(props) {
  const { title, basic, pro, business } = props;

  return (
    <div>
      <Text type="h5">{title}</Text>
      <div className="comparePlanTypeContainer">
        <div>
          <Text type="h6">BASIC</Text>
          {basic && <span>&#10003;</span>}
        </div>
        <div>
          <Text type="h6">PRO</Text>
          {pro && <span>&#10003;</span>}
        </div>
        <div>
          <Text type="h6">BUSINESS</Text>
          {business && <span>&#10003;</span>}
        </div>
      </div>
    </div>
  );
}
