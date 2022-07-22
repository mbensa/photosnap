import React from 'react';
import InfoSection from './InfoSection';
import Image from './Image';
import './section.css';
import useMobile from '../hooks/useMobile';

export default function Section(props) {
  const { isMobile } = useMobile();

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
