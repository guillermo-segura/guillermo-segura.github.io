import { memo } from "react";
import { CardSection } from "@/components/Card";
import { ImgSlide } from "@/components/ImgSlide/ImgSlide";
import { Slide, RightSlide, LeftSlide } from "@/components/Slide";
import { Text } from "@/components/Text/Text";
import { VerticalDivider } from "@/components/VerticalDivider/VerticalDivider";

import {
  oldComputersImg,
  universityImg,
  edinburghImg,
  rooserImg,
  optixImg,
} from "@/assets/journey";

import content from "@/content/journey.json";

import { LineBreak } from "@/components/LineBreak/LineBreak";

const JourneySectionRaw = () => (
  <CardSection>
    <Slide header={content.journey[1].header}>
      <Text variant="subtext" textAlign="center">
        {content.journey[1].content[1]}
      </Text>
    </Slide>

    <VerticalDivider />

    <RightSlide
      imgSrc={oldComputersImg}
      imgAlt="Picture of old computers piled up"
      header={content.journey[2].header}
    >
      <Text variant="subtext" textAlign="right">
        {content.journey[2].content[1]}
      </Text>
      <Text variant="subtext" textAlign="right">
        {content.journey[2].content[2]}
        <i>{content.journey[2].content[3]}</i>
        {content.journey[2].content[4]}
      </Text>
    </RightSlide>

    <VerticalDivider />

    <LeftSlide
      imgSrc={universityImg}
      imgAlt="Man covering his face with his hands"
      header={content.journey[3].header}
    >
      <Text variant="subtext">{content.journey[3].content[1]}</Text>
      <Text variant="subtext">{content.journey[3].content[2]}</Text>
    </LeftSlide>

    <VerticalDivider />

    <Slide header={content.journey[4].header}>
      <Text variant="subtext" textAlign="center">
        {content.journey[4].content}
      </Text>
    </Slide>

    <VerticalDivider />

    <ImgSlide
      right
      imgSrc={edinburghImg}
      imgAlt="Photo of Edinburgh"
      header={content.journey[5].header}
      content={
        <>
          {content.journey[5].content[1]}
          <LineBreak />
          {content.journey[5].content[2]}
        </>
      }
    />

    <VerticalDivider />

    <LeftSlide
      imgSrc={rooserImg}
      imgAlt="Rooser logo"
      header={content.journey[6].header}
    >
      <Text variant="subtext">{content.journey[6].content[1]}</Text>
      <Text variant="subtext">{content.journey[6].content[2]}</Text>
    </LeftSlide>

    <VerticalDivider />

    <Slide header={content.journey[7].header}>
      <Text variant="subtext" textAlign="center">
        {content.journey[7].content[1]}
        <i>{content.journey[7].content[2]}</i>
        {content.journey[7].content[3]}
      </Text>
    </Slide>

    <VerticalDivider />

    <RightSlide
      imgSrc={optixImg}
      imgAlt="Optix logo"
      header={content.journey[8].header}
    >
      <Text variant="subtext" textAlign="right">
        {content.journey[8].content[1]}
      </Text>
      <Text variant="subtext" textAlign="right">
        {content.journey[8].content[2]}
      </Text>
    </RightSlide>
  </CardSection>
);

export const JourneySection = memo(JourneySectionRaw);
