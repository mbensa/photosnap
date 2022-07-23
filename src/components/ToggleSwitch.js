import React from 'react';
import './toggleSwitch.css';
import Text from './Text';

export default function ToggleSwitch(props) {
  const { onToggle, isToggled } = props;

  return (
    <div className="toggleSwitchContainer">
      <Text type="h4" style={{ color: isToggled ? '#dfdfdf' : '#000000' }}>
        Monthly
      </Text>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <Text type="h4" style={{ color: isToggled ? '#000000' : '#dfdfdf' }}>
        Yearly
      </Text>
    </div>
  );
}
