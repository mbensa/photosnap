import React from 'react';

export default function Button(props) {
  const { children, style } = props;
  return (
    <button>
      <Text type="h4">{children}</Text>
    </button>
  );
}
