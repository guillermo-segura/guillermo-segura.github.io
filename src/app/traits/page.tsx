import BodyList from "@/components/Body/BodyList";
import BodyHeader from "@/components/Body/BodyHeader";
import BodySection from "@/components/Body/BodySection";
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import CardBody from "@/components/Card/CardBody";
import LoadingBar from "@/components/LoadingBar/LoadingBar";
import BlueLink from "@/components/BlueLink/BlueLink";
import content from '@/content/content.json';

import data from './traits';

const classNames = {
  columnsContainer: 'flex flex-row w-full items-center mb-6 space-x-6',
  leftColumn: 'w-1/2 text-center',
  rightColumn: 'w-1/2 space-y-2',
  textSpacing: 'space-y-2',
};

export default function Page() {
  return (
    <>
      <CardHeader header={content.traits.header} />

      {/* CARD BODY */}
      <CardBody>  
        <BodySection>
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
              <BlueLink href="https://www.16personalities.com/intj-personality">INTJ-A</BlueLink>. 
            </div>
          </div>
        </BodySection>
        <BodyList
          data={data.preferences}
          header={content.traits.sectionHeader.whatILike}
        />   
      </CardBody>  

      <CardFooter home skills />
    </>
  );
}