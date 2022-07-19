import React from 'react';
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
  } = props;

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
          />
          <Image image={image} alt={alt} />
        </div>
      ) : (
        <div className="sectionContainer">
          <Image image={image} alt={alt} />
          <InfoSection
            title={title}
            message={message}
            buttonClass={buttonClass}
            btnText={btnText}
            dark={dark}
            darkBg={darkBg}
          />
        </div>
      )}
    </div>
  );
}
