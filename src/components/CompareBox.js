import React, { Fragment } from 'react';
import Text from '../components/Text';
import '../components/compareBox.css';
import useMobile from '../hooks/useMobile';
import CompareBoxMobileItem from './CompareBoxMobileItem';
import CompareBoxDesktopItem from './CompareBoxDesktopItem';

export default function CompareBox() {
  const { isMobile } = useMobile();

  const mobileFeatures = [
    {
      title: 'UNLIMITED STORY POSTING',
      basic: true,
      pro: true,
      business: true,
    },
    {
      title: 'UNLIMITED PHOTO UPLOAD',
      basic: true,
      pro: true,
      business: true,
    },
    {
      title: 'EMBEDDING CUSTOM CONTENT',
      basic: false,
      pro: true,
      business: true,
    },
    {
      title: 'CUSTOMIZE METADATA',
      basic: false,
      pro: true,
      business: true,
    },
    {
      title: 'ADVANCED METRICS',
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: 'PHOTO DOWNLOADS',
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: 'SEARCH ENGINE INDEXING',
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: 'CUSTOM ANALYTICS',
      basic: false,
      pro: false,
      business: true,
    },
  ];

  const desktopFeatures = [
    {
      title: 'UNLIMITED STORY POSTING',
      basic: true,
      pro: true,
      business: true,
    },
    {
      title: 'UNLIMITED PHOTO UPLOAD',
      basic: true,
      pro: true,
      business: true,
    },
    {
      title: 'EMBEDDING CUSTOM CONTENT',
      basic: false,
      pro: true,
      business: true,
    },
    {
      title: 'CUSTOMIZE METADATA',
      basic: false,
      pro: true,
      business: true,
    },
    {
      title: 'ADVANCED METRICS',
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: 'PHOTO DOWNLOADS',
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: 'SEARCH ENGINE INDEXING',
      basic: false,
      pro: false,
      business: true,
    },
    {
      title: 'CUSTOM ANALYTICS',
      basic: false,
      pro: false,
      business: true,
    },
  ];

  if (isMobile) {
    return (
      <div>
        <Text type="h5">THE FEATURES</Text>
        <hr className="compareLineMain" />

        {mobileFeatures.map((item) => (
          <Fragment key={item.title}>
            <CompareBoxMobileItem
              title={item.title}
              basic={item.basic}
              pro={item.pro}
              business={item.business}
            />
            <hr className="compareLine" />
          </Fragment>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <Text type="h2" className="compareBoxTitle">
          COMPARE
        </Text>
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            THE FEATURES
          </Text>
          <Text type="h5" className="compareBoxWidth">
            BASIC
          </Text>
          <Text type="h5" className="compareBoxWidth">
            PRO
          </Text>
          <Text type="h5" className="compareBoxWidth">
            BUSINESS
          </Text>
        </div>
        <hr className="compareLineMain" />

        {desktopFeatures.map((item) => (
          <Fragment key={item.title}>
            <CompareBoxDesktopItem
              title={item.title}
              basic={item.basic}
              pro={item.pro}
              business={item.business}
            />
            <hr className="compareLine" />
          </Fragment>
        ))}
      </div>
    );
  }
}
