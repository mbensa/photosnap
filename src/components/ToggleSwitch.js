import React, { useState } from 'react';
import './toggleSwitch.css';
import Text from './Text';

export default function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <div className="toggleSwitchContainer">
      <Text type="h3" style={{ color: isToggled ? '#dfdfdf' : '#000000' }}>
        Monthly
      </Text>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <Text type="h3" style={{ color: isToggled ? '#000000' : '#dfdfdf' }}>
        Yearly
      </Text>
    </div>
  );
}

//put state in parent container and then pass down isToggled and on Toggle as props