import { BodyHeader,
  BodyListGroup } from '@/components/Body';
import { BlueLink } from '@/components/BlueLink/BlueLink';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';
import { CardHeader, CardSection, CardFooter } from '@/components/Card';
import { ImgSlide } from '@/components/ImgSlide/ImgSlide';
import { Slide } from '@/components/Slide/Slide';
import { VerticalDivider } from '@/components/VerticalDivider/VerticalDivider';

import { oldComputersImg, universityImg, edinburghImg, rooserImg, optixImg } from '@/assets/journey';

import { traits, journey, buttons } from '@/content/content.json';

import { Text } from '@/components/Text/Text';
import { LineBreak } from '@/components/LineBreak/LineBreak';
import { joinStringArrays } from '@/utils';
import data from './traits';

const PERSONALITY_LINK = 'https://www.16personalities.com/intj-personality';

const style = {
  buttonsContainer: [
    'flex',
    'flex-col',
    'xs:flex-row',
    'space-y-6',
    'xs:space-y-0',
    'xs:space-x-6',
    'justify-center',
    'items-center',
  ],
};

export default function Page() {
  return (
    <>
      <CardHeader header={traits.header} />

      <CardSection blue spaceY={6}>
        <Text variant="subtext">
          {traits.content[1]}
          <LineBreak />
          {traits.content[2]}
          <i>{traits.content[3]}</i>
          {traits.content[4]}
          <LineBreak />
          {traits.content[5]}
          <LineBreak />
          {traits.content[6]}
        </Text>
        <BlueLink href={PERSONALITY_LINK}>INTJ-A</BlueLink>
        <div className={joinStringArrays(style.buttonsContainer)}>
          <ButtonLink href="/" type="secondary">
            {buttons.back}
          </ButtonLink>
          <ButtonLink href="/skills">
            {buttons.skills}
          </ButtonLink>
        </div>
      </CardSection>

      <CardSection>
          <Slide
            header={journey[1].header}
            content={journey[1].content[1]}
          />
          <VerticalDivider />
          <Slide
            right
            imgSrc={oldComputersImg}
            imgAlt="Picture of old computers piled up"
            header={journey[2].header}
            content={(
              <>
                {journey[2].content[1]}
                <LineBreak />
                {journey[2].content[2]}
                <i>{journey[2].content[3]}</i>
                {journey[2].content[4]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            imgSrc={universityImg}
            imgAlt="Man covering his face with his hands"
            header={journey[3].header}
            content={(
              <>
                {journey[3].content[1]}
                <i>{journey[3].content[2]}</i>
                <LineBreak />
                {journey[3].content[3]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            header={journey[4].header}
            content={journey[4].content}
          />
          <VerticalDivider />
          <ImgSlide
            right
            imgSrc={edinburghImg}
            imgAlt="Photo of Edinburgh"
            header={journey[5].header}
            content={(
              <>
                {journey[5].content[1]}
                <LineBreak />
                {journey[5].content[2]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            imgSrc={rooserImg}
            imgAlt="Rooser logo"
            header={journey[6].header}
            content={(
              <>
                {journey[6].content[1]}
                <LineBreak />
                {journey[6].content[2]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            header={journey[7].header}
            content={(
              <>
                {journey[7].content[1]}
                <i>{journey[7].content[2]}</i>
                {journey[7].content[3]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            imgSrc={optixImg}
            imgAlt="Optix logo"
            right
            header={journey[8].header}
            content={(
              <>
                {journey[8].content[1]}
                <LineBreak />
                {journey[8].content[2]}
              </>
            )}
          />
      </CardSection>

      <CardSection>
        <BodyHeader>
          {traits.sectionHeader.whatILike}
        </BodyHeader>
        <BodyListGroup data={data.preferences}/>
      </CardSection>

      <CardFooter home skills />
    </>
  );
}