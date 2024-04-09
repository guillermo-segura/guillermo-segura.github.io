import profilePic from '@/assets/avatar.svg';
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import content from '@/content/content.json';

const classNames = {
  body: 'flex flex-row justify-around pt-6',
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
      {/* <div className={classNames.body}>
      </div> */}

      <CardFooter skills traits />
    </>
  );
}