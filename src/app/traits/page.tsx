import BodyList from "@/components/Body/BodyList";
import BlueLink from "@/components/BlueLink/BlueLink";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardHeader from "@/components/Card/CardHeader";
import CardBody from "@/components/Card/CardBody";
import CardFooter from "@/components/Card/CardFooter";
import ImgSlide from '@/components/ImgSlide/ImgSlide';
import Slide from '@/components/Slide/Slide';
import VerticalDivider from "@/components/VerticalDivider/VerticalDivider";

import rooserPic from '@/assets/journey/rooser.jpg';
import edinburghPic from '@/assets/journey/edinburgh.jpg';
import oldComputerPic from '@/assets/journey/computers.png';
import studyingPic from '@/assets/journey/university.jpg';

import content from '@/content/content.json';

import data from './traits';

const personalityLink = 'https://www.16personalities.com/intj-personality';

const classNames = {
  textSpacing: 'space-y-6',
  buttonsContainer: 'flex flex-col xs:flex-row space-y-6 xs:space-y-0 xs:space-x-6 justify-center items-center',
  imgSlideContainer: 'lg:my-12',
};

export default function Page() {
  return (
    <>
      <CardHeader header={content.traits.header} />

      {/* CARD BODY */}
      <CardBody blue>
        <div className={classNames.textSpacing}>
          <div>{content.traits.content[1]}</div>
          <div>
            {content.traits.content[2]}
            <i>{content.traits.content[3]}</i>
            {content.traits.content[4]}
          </div>
          <div>{content.traits.content[5]}</div>
          <div>
            {content.traits.content[6]}
            &nbsp;
            <BlueLink href={personalityLink}>INTJ-A</BlueLink>. 
          </div>
        </div>
        <div className={classNames.buttonsContainer}>
          <ButtonLink label={content.buttons.back} href="/" type="secondary" />
          <ButtonLink label={content.buttons.skills} href="/skills" />
        </div>
      </CardBody>
      <CardBody>  
        <div className="mt-12">
          <Slide
            header={content.journey[1].header}
            content={content.journey[1].content[1]}
          />
          <VerticalDivider />
          <Slide
            right
            imgSrc={oldComputerPic}
            header={content.journey[2].header}
            content={(
              <>
                {content.journey[2].content[1]}
                <br />
                <br />
                {content.journey[2].content[2]}
                <i>{content.journey[2].content[3]}</i>
                {content.journey[2].content[4]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            imgSrc={studyingPic}
            header={content.journey[3].header}
            content={(
              <>
                {content.journey[3].content[1]}
                <i>{content.journey[3].content[2]}</i>
                <br />
                <br />
                {content.journey[3].content[3]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            header={content.journey[4].header}
            content={content.journey[4].content}
          />
          <VerticalDivider />
          <div className={classNames.imgSlideContainer}>
            <ImgSlide
              right
              imgSrc={edinburghPic}
              imgAlt="Edinburgh image"
              header={content.journey[5].header}
              content={(
                <>
                  {content.journey[5].content[1]}
                  <br />
                  <br />
                  {content.journey[5].content[2]}
                </>
              )}
            />
          </div>
          <VerticalDivider />
          <Slide
            imgSrc={rooserPic}
            header={content.journey[6].header}
            content={(
              <>
                {content.journey[6].content[1]}
                <br />
                <br />
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
        </div>

        <BodyList
          data={data.preferences}
          header={content.traits.sectionHeader.whatILike}
        />
      </CardBody>  

      <CardFooter home skills />
    </>
  );
}