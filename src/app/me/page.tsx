import profilePic from '@/assets/avatar.svg';
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import Carousel, { CarouselItem } from '@/components/Carousel/Carousel';
import PolaroidImg from '@/components/PolaroidImg/PolaroidImg';
import Slide from '@/components/Slide/Slide';
import content from '@/content/content.json';

const classNames = {
  body: 'flex flex-col justify-around pt-6 px-12',
};

export default function Page() {
  return (
    <>
      <CardHeader
        imgSrc={profilePic}
        imgAlt="This is me!"
        imgSize={250}
        header={content.me.header}
        description={content.me.description}
      />

      {/* CARD BODY */}
      <div className={classNames.body}>
        <Carousel>
          <CarouselItem id="carousel__slide1">
            <Slide />
          </CarouselItem>
          <CarouselItem id="carousel__slide2">
            <Slide right imgSrc={profilePic} />
          </CarouselItem>
          <CarouselItem id="carousel__slide3">
            <Slide imgSrc={profilePic} />
          </CarouselItem>
          <CarouselItem id="carousel__slide4">
            <Slide right imgSrc={profilePic} />
          </CarouselItem>
          <CarouselItem id="carousel__slide5">
            <Slide imgSrc={profilePic} />
          </CarouselItem>
          <CarouselItem id="carousel__slide6">
            <Slide right />
          </CarouselItem>
        </Carousel>
      </div>

      <CardFooter skills traits />
    </>
  );
}