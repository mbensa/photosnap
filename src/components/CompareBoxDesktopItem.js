import React from 'react';
import Text from './Text';

export default function CompareBoxDesktopItem(props) {
  const { title, basic, pro, business } = props;

  return (
    <div>
      <div className="compareBoxPlan">
        <Text type="h5" className="compareBoxWidth compareBoxStyle">
          {title}
        </Text>
        <span className="compareBoxWidth">
          {basic && <span>&#10003;</span>}
        </span>
        <span className="compareBoxWidth">{pro && <span>&#10003;</span>}</span>
        <span className="compareBoxWidth">
          {business && <span>&#10003;</span>}
        </span>
      </div>
    </div>
  );
}
