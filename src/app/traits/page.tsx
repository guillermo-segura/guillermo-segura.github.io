import BodyList from "@/components/Body/BodyList";
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import content from '@/content/content.json';
import data from './traits';
import BodyHeader from "@/components/Body/BodyHeader";
import Link from "@/components/Link/Link";
import LoadingBar from "@/components/LoadingBar/LoadingBar";

const classNames = {
  body: 'flex flex-col px-12 space-y-6',
};

export default function Page() {
  return (
    <>
      <CardHeader
        header={content.traits.header}
        description={content.traits.description}
      />

      {/* CARD BODY */}
      <div className={classNames.body}>
        <BodyList
          data={data.preferences}
          header="My Preferences"
        />
        <BodyHeader>Personality <Link href="https://www.16personalities.com/intj-personality">INTJ-A</Link></BodyHeader>
        <div className="w-2/3 self-center space-y-6">
          <LoadingBar leftLabel="Introverted" rightLabel="Extraverted" status={51} />
          <LoadingBar leftLabel="Intuitive" rightLabel="Observant" status={76} />
          <LoadingBar leftLabel="Thinking" rightLabel="Feeling" status={55} />
          <LoadingBar leftLabel="Judging" rightLabel="Prospecting" status={71} />
          <LoadingBar leftLabel="Assertive" rightLabel="Turbulent" status={81} />
        </div>
      </div>

      <CardFooter home skills />
    </>
  );
}