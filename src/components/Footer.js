import React from 'react';
import Text from '../components/Text';
import Button from './Button';
import Social from './Social';
import './footer.css';
import { ReactComponent as LogoWhiteSvg } from '../assets/shared/desktop/logoWhite.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footerContainer">
      <div className="firstFooterContainer">
        <div className="logoFooterContainer">
          <LogoWhiteSvg></LogoWhiteSvg>
        </div>
        <div className="socialFooterContainer">
          <Social socialClass="socialMedia"></Social>
        </div>
        <div className="textFooterContainer">
          <Link to="/" className="textFooterLink">
            <Text type="h5" className="textFooter">
              HOME
            </Text>
          </Link>
          <Link to="/stories" className="textFooterLink">
            <Text type="h5" className="textFooter">
              STORIES
            </Text>
          </Link>
          <Link to="/features" className="textFooterLink">
            <Text type="h5" className="textFooter">
              FEATURES
            </Text>
          </Link>
          <Link to="/pricing" className="textFooterLink">
            <Text type="h5" className="textFooter">
              PRICING
            </Text>
          </Link>
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
    </footer>
  );
}
