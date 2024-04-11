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
            <Slide
              header="Want to see my story?"
              content="Click next!"
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide2">
            <Slide
              right
              imgSrc={profilePic}
              header="My early days"
              content="As many kids in the '90s, my journey starts with early computers and videogames"
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide3">
            <Slide
              imgSrc={profilePic}
              header="Through university"
              content="I considered this a failure for a long time, as I didn't finish my degree. However, I've come to realise that I learned a lot in other areas and was my first contact with programming"
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide4">
            <Slide
              right
              imgSrc={profilePic}
              header="Deciding what's next"
              content="I worked in multiple jobs as I planned how I'd kickoff my career"
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide5">
            <Slide
              imgSrc={profilePic}
              header="Relocating to Edinburgh"
              content="I decided to move to Edinburgh to go out of my confort zone"
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide6">
            <Slide
              right
              imgSrc={profilePic}
              header="Working at Rooser"
              content="Initially as a freelance and then joining the team permanently, this experience sets the ground for my career"
            />
          </CarouselItem>
          <CarouselItem id="carousel__slide7">
            <Slide
              header="What now?"
              content="I'm taking some time for personal development and choosing carefully what my next steps are. Stay tuned!"
            />
          </CarouselItem>
        </Carousel>
      </div>

      <CardFooter skills traits />
    </>
  );
}