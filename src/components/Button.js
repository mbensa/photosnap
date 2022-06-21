import React from 'react';
import Text from './Text';
import Icon from './Icon';
import './button.css';

export default function Button(props) {
  const { children, style, icon, dark } = props;

  return (
    <button className={style}>
      <Text type="h4">{children}</Text>
      {icon && <Icon dark={dark} />}
    </button>
  );
}
