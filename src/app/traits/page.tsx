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
};

export default function Page() {
  return (
    <>
      <CardHeader header={content.traits.header} />

      {/* CARD BODY */}
      <CardBody>  
        <BodySection>
          <div className="space-y-2">
            <div>{content.traits.content[1]}</div>
            <div>
              {content.traits.content[2]}
              <i>{content.traits.content[3]}</i>
              {content.traits.content[4]}
            </div>
            <div>{content.traits.content[5]}</div>
            
          </div>
        </BodySection>
        <BodyHeader>My traits & personality</BodyHeader>
        <div className={classNames.columnsContainer}>
          <div className={classNames.leftColumn}>
            <div>
              {content.traits.content[6]}
              &nbsp;
              <BlueLink href="https://www.16personalities.com/intj-personality">INTJ-A</BlueLink>
            </div>
          </div>

          <div className={classNames.rightColumn}>
            <LoadingBar leftLabel="Introverted" rightLabel="Extraverted" status={51} />
            <LoadingBar leftLabel="Intuitive" rightLabel="Observant" status={76} />
            <LoadingBar leftLabel="Thinking" rightLabel="Feeling" status={55} />
            <LoadingBar leftLabel="Judging" rightLabel="Prospecting" status={71} />
            <LoadingBar leftLabel="Assertive" rightLabel="Turbulent" status={81} />
          </div>
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