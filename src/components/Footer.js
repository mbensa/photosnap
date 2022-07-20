import React, { useState } from 'react';
import Text from '../components/Text';
import Button from './Button';
import Social from './Social';
import './footer.css';
import { ReactComponent as LogoWhiteSvg } from '../assets/shared/desktop/logoWhite.svg';

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="firstFooterContainer">
        <div className="logoFooterContainer">
          <LogoWhiteSvg></LogoWhiteSvg>
        </div>
        <div className="socialFooterContainer">
          <Social socialClass="socialMedia"></Social>
        </div>
        <div className="textFooterContainer">
          <Text type="h5" className="textFooter">
            HOME
          </Text>
          <Text type="h5" className="textFooter">
            STORIES
          </Text>
          <Text type="h5" className="textFooter">
            FEATURES
          </Text>
          <Text type="h5" className="textFooter">
            PRICING
          </Text>
        </div>
      </div>
      <div className="secondFooterContainer">
        <Button buttonClass="opaqueWhite buttonFooter" icon={true}>
          GET AN INVITE
        </Button>
        <Text type="p" className="copyrightFooter">
          Copyright 2022. All Rights Reserved
        </Text>
      </div>
    </div>
  );
}
