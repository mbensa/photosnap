import React from 'react';
import Text from './Text';
import Icon from './Icon';
import './button.css';

export default function Button(props) {
  const { children, buttonClass, icon, dark } = props;

  return (
    <button className={buttonClass}>
      <Text type="h4">{children}</Text>
      {icon && <Icon dark={dark} />}
    </button>
  );
}
