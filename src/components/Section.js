import React, { useEffect, useCallback, useState } from 'react';
import InfoSection from './InfoSection';
import Image from './Image';
import './section.css';

export default function Section(props) {
  const {
    image,
    alt,
    title,
    message,
    buttonClass,
    btnText,
    dark,
    darkBg,
    infoFirst,
    button,
    line,
  } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  if (isMobile) {
    return (
      <div className="sectionContainer">
        <Image className="sectionImage" image={image} alt={alt} />
        <InfoSection
          title={title}
          message={message}
          buttonClass={buttonClass}
          btnText={btnText}
          dark={dark}
          darkBg={darkBg}
          button={button}
          line={line}
        />
      </div>
    );
  } else {
    return (
      <div>
        {infoFirst ? (
          <div className="sectionContainer">
            <InfoSection
              title={title}
              message={message}
              buttonClass={buttonClass}
              btnText={btnText}
              dark={dark}
              darkBg={darkBg}
              button={button}
              line={line}
            />
            <Image className="sectionImage" image={image} alt={alt} />
          </div>
        ) : (
          <div className="sectionContainer">
            <Image className="sectionImage" image={image} alt={alt} />
            <InfoSection
              title={title}
              message={message}
              buttonClass={buttonClass}
              btnText={btnText}
              dark={dark}
              darkBg={darkBg}
              button={button}
              line={line}
            />
          </div>
        )}
      </div>
    );
  }
}
