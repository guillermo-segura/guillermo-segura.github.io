import BodyList from "@/components/Body/BodyList";
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import content from '@/content/content.json';
import data from './traits';
import BodyHeader from "@/components/Body/BodyHeader";
import Link from "@/components/Link/Link";
import LoadingBar from "@/components/LoadingBar/LoadingBar";
import CardBody from "@/components/Card/CardBody";
import BodySection from "@/components/Body/BodySection";

export default function Page() {
  return (
    <>
      <CardHeader
        header={content.traits.header}
        // description={content.traits.description}
      />

      {/* CARD BODY */}
      <CardBody>  
        <BodySection>
          {content.traits.description}
        </BodySection>
        <div className="flex flex-row w-full space-x-12">
          <div className="w-1/2">
            <BodyList
              data={data.preferences}
              header="What I like"
              vertical
            />
          </div>   
          <div className="w-1/2">
            <BodyHeader>Personality <Link href="https://www.16personalities.com/intj-personality">INTJ-A</Link></BodyHeader>
            <div className="self-center space-y-8 px-6 my-auto">
              <LoadingBar leftLabel="Introverted" rightLabel="Extraverted" status={51} />
              <LoadingBar leftLabel="Intuitive" rightLabel="Observant" status={76} />
              <LoadingBar leftLabel="Thinking" rightLabel="Feeling" status={55} />
              <LoadingBar leftLabel="Judging" rightLabel="Prospecting" status={71} />
              <LoadingBar leftLabel="Assertive" rightLabel="Turbulent" status={81} />
            </div>
          </div>
        </div>
      </CardBody>  

      <CardFooter home skills />
    </>
  );
}