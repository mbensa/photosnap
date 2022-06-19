import React from 'react';
import './text.css';

export default function Text(props) {
  const { type, children } = props;
  const Tag = type;

  return <Tag>{children}</Tag>;
}
