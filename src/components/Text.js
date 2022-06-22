import React from 'react';
import './text.css';

export default function Text(props) {
  const { type, children, style } = props;
  const Tag = type;

  return <Tag style={style}>{children}</Tag>;
}
