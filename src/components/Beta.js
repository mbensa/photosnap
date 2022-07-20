import React from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import './beta.css';

export default function Beta() {
  return (
    <div className="betaContainer">
      <hr className="betaLine" />
      <Text className="betaText" type="h2">
        WE'RE IN BETA. GET YOUR INVITE TODAY!
      </Text>
      <Button buttonClass="opaqueWhite betaButton" icon>
        GET AN INVITE
      </Button>
    </div>
  );
}
