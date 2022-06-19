import React from 'react';
import Text from "./Text";

export default function Button(props) {
  const { children, style, icon } = props;

  return (
    <button className={style}>
      <Text type="h4">{children}</Text>
    {icon}
    </button>
  );
}
