import profilePic from '@/assets/avatar.svg';
import edinburghPic from '@/assets/edinburgh.jpg';
import rooserPic from '@/assets/rooser.jpg';
import BodySection from '@/components/Body/BodySection';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import CardBody from '@/components/Card/CardBody';
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import ImgSlide from '@/components/ImgSlide/ImgSlide';
import Slide from '@/components/Slide/Slide';
import content from '@/content/content.json';

function VerticalDivider () {
  return (
    <div>
      <div className="w-1/2 border-r-4 border-dotted border-stone-300 h-32"></div>
    </div>
  );
}

const classNames = {
  buttonsContainer: 'space-x-6 flex flex-row justify-center mt-12',
  slidesContainer: 'flex flex-col',
}

export default function Page() {
  return (
    <>
      <CardHeader
        imgSrc={profilePic}
        imgSize={200}
        header={content.me.header}
        description={content.me.description}
      />

      <div className="bg-blue-100 p-12">
        <BodySection>
          {content.me.content[1]}
        </BodySection>

        <div className={classNames.buttonsContainer}>
          <ButtonLink label={content.buttons.aboutMe}  href="/traits" />
          <ButtonLink label={content.buttons.skills}  href="/skills" />
        </div>
      </div>
      {/* CARD BODY */}
      <CardBody>

        <div className={classNames.slidesContainer}>
          <Slide
            small
            header={content.me.slides[1].header}
            content={content.me.slides[1].content[1]}
          />
          <VerticalDivider />
          <Slide
            right
            imgSrc={profilePic}
            header={content.me.slides[2].header}
            content={(
              <>
                {content.me.slides[2].content[1]}
                <br />
                <br />
                {content.me.slides[2].content[2]}
                <i>{content.me.slides[2].content[3]}</i>
                {content.me.slides[2].content[4]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            imgSrc={profilePic}
            header={content.me.slides[3].header}
            content={(
              <>
                {content.me.slides[3].content[1]}
                {/* <i>{content.me.slides[3].content[2]}</i> */}
                <br />
                <br />
                {content.me.slides[3].content[3]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            small
            header={content.me.slides[4].header}
            content={content.me.slides[4].content}
          />
          <VerticalDivider />
          <div className="my-12">
            <ImgSlide
              imgSrc={edinburghPic}
              imgAlt="asdas"
              header={content.me.slides[5].header}
              content={content.me.slides[5].content}
            />
          </div>
          <VerticalDivider />
          <Slide
            right
            imgSrc={rooserPic}
            header={content.me.slides[6].header}
            content={(
              <>
                {content.me.slides[6].content[1]}
                <br />
                <br />
                {content.me.slides[6].content[2]}
              </>
            )}
          />
          <VerticalDivider />
          <Slide
            small
            header={content.me.slides[7].header}
            content={(
              <>
                {content.me.slides[7].content[1]}
                <i>{content.me.slides[7].content[2]}</i>
                {content.me.slides[7].content[3]}
              </>
            )}
          />
        </div>
      </CardBody>

      <CardFooter skills traits />
    </>
  );
}