import React from 'react';
import InfoSection from './InfoSection';
import Image from './Image';

export default function Section(props) {
  const {
    image,
    alt,
    title,
    message,
    buttonClass,
    btnText,
    dark,
    infoSectionClass,
    darkBg,
    infoFirst,
  } = props;

  return (
    <div>
      {infoFirst ? (
        <div>
          <InfoSection
            infoSectionClass={infoSectionClass}
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
        <div>
          <Image image={image} alt={alt} />
          <InfoSection
            infoSectionClass={infoSectionClass}
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
