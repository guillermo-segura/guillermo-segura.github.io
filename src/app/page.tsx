import CardBody from '@/components/Card/CardBody';
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";

import content from '@/content/content.json';

export default function Page() {
  return (
    <>
      <CardHeader
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