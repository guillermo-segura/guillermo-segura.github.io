import profilePic from '@/assets/avatar.svg';
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import Carousel, { CarouselItem } from '@/components/Carousel/Carousel';
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
            <div>Slide 1</div>
          </CarouselItem>
          <CarouselItem id="carousel__slide2">
            <div>Slide 2</div>
          </CarouselItem>
          <CarouselItem id="carousel__slide3">
            <div>Slide 3</div>
          </CarouselItem>
          <CarouselItem id="carousel__slide4">
            <div>Slide 4</div>
          </CarouselItem>
        </Carousel>
      </div>

      <CardFooter skills traits />
    </>
  );
}