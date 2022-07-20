import React from 'react';
import Text from './Text';
import Icon from './Icon';
import './button.css';

export default function Button(props) {
  const { children, buttonClass, icon, dark, ...rest } = props;

  return (
    <button className={buttonClass} {...rest}>
      <Text type="h5">{children}</Text>
      {icon && <Icon dark={dark} />}
    </button>
  );
}
