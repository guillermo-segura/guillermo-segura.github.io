import CardBody from '@/components/Card/CardBody';
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";

import mePic from '@/assets/me.jpeg'

import content from '@/content/content.json';

export default function Page() {
  return (
    <>
      <CardHeader
        imgSrc={mePic}
        imgSize={300}
        header={content.me.header}
        description={content.me.description}
      />

      {/* CARD BODY */}
      <CardBody blue>
        {content.me.content}
      </CardBody>

      <CardFooter skills traits />
    </>
  );
}