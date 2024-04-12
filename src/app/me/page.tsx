import profilePic from '@/assets/avatar.svg';
import edinburghPic from '@/assets/edinburgh.jpg';
import rooserPic from '@/assets/rooser.jpg';
import BodySection from '@/components/Body/BodySection';
import CardBody from '@/components/Card/CardBody';
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import Carousel, { CarouselItem } from '@/components/Carousel/Carousel';
import ImgSlide from '@/components/ImgSlide/ImgSlide';
import Slide from '@/components/Slide/Slide';
import content from '@/content/content.json';

export default function Page() {
  return (
    <>
      <CardHeader
        imgSrc={profilePic}
        imgAlt="This is me!"
        imgSize={200}
        header={content.me.header}
        description={content.me.description}
      />

      {/* CARD BODY */}
      <CardBody>
        <BodySection>
          {content.me.content[1]}
          <br />
          {content.me.content[2]}
        </BodySection>
        <Carousel>
          <CarouselItem id="carousel__slide1">
            <Slide
              header={content.me.slides[1].header}
              content={content.me.slides[1].content}
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide2">
            <Slide
              right
              imgSrc={profilePic}
              header={content.me.slides[2].header}
              content={content.me.slides[2].content}
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide3">
            <Slide
              imgSrc={profilePic}
              header={content.me.slides[3].header}
              content={content.me.slides[3].content}
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide4">
            <Slide
              header={content.me.slides[4].header}
              content={content.me.slides[4].content}
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide5">
            <ImgSlide
              imgSrc={edinburghPic}
              imgAlt="asdas"
              header={content.me.slides[5].header}
              content={content.me.slides[5].content}
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide6">
            <Slide
              right
              imgSrc={rooserPic}
              header={content.me.slides[6].header}
              content={content.me.slides[6].content}
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide7">
            <Slide
              right
              header={content.me.slides[7].header}
              content={content.me.slides[7].content}
            />
          </CarouselItem>
        </Carousel>
      </CardBody>

      <CardFooter skills traits />
    </>
  );
}