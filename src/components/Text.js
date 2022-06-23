import React from 'react';
import './text.css';

export default function Text(props) {
  const { type, children, style, className } = props;
  const Tag = type;

  return (
    <Tag style={style} className={className}>
      {children}
    </Tag>
  );
}
