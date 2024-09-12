import { memo } from 'react';
import { CardSection } from '@/components/Card';
import { ImgSlide } from '@/components/ImgSlide/ImgSlide';
import { Slide } from '@/components/Slide/Slide';
import { VerticalDivider } from '@/components/VerticalDivider/VerticalDivider';

import { oldComputersImg, universityImg, edinburghImg, rooserImg, optixImg } from '@/assets/journey';

import content from '@/content/journey.json';

import { LineBreak } from '@/components/LineBreak/LineBreak';

const JourneySectionRaw = () => (
  <CardSection>
    <Slide
      header={content.journey[1].header}
      content={content.journey[1].content[1]}
    />
    <VerticalDivider />
    <Slide
      right
      imgSrc={oldComputersImg}
      imgAlt="Picture of old computers piled up"
      header={content.journey[2].header}
      content={(
        <>
          {content.journey[2].content[1]}
          <LineBreak />
          {content.journey[2].content[2]}
          <i>{content.journey[2].content[3]}</i>
          {content.journey[2].content[4]}
        </>
      )}
    />
    <VerticalDivider />
    <Slide
      imgSrc={universityImg}
      imgAlt="Man covering his face with his hands"
      header={content.journey[3].header}
      content={(
        <>
          {content.journey[3].content[1]}
          <LineBreak />
          {content.journey[3].content[2]}
        </>
      )}
    />
    <VerticalDivider />
    <Slide
      header={content.journey[4].header}
      content={content.journey[4].content}
    />
    <VerticalDivider />
    <ImgSlide
      right
      imgSrc={edinburghImg}
      imgAlt="Photo of Edinburgh"
      header={content.journey[5].header}
      content={(
        <>
          {content.journey[5].content[1]}
          <LineBreak />
          {content.journey[5].content[2]}
        </>
      )}
    />
    <VerticalDivider />
    <Slide
      imgSrc={rooserImg}
      imgAlt="Rooser logo"
      header={content.journey[6].header}
      content={(
        <>
          {content.journey[6].content[1]}
          <LineBreak />
          {content.journey[6].content[2]}
        </>
      )}
    />
    <VerticalDivider />
    <Slide
      header={content.journey[7].header}
      content={(
        <>
          {content.journey[7].content[1]}
          <i>{content.journey[7].content[2]}</i>
          {content.journey[7].content[3]}
        </>
      )}
    />
    <VerticalDivider />
    <Slide
      imgSrc={optixImg}
      imgAlt="Optix logo"
      right
      header={content.journey[8].header}
      content={(
        <>
          {content.journey[8].content[1]}
          <LineBreak />
          {content.journey[8].content[2]}
        </>
      )}
    />
  </CardSection>
);

export const JourneySection = memo(JourneySectionRaw);
