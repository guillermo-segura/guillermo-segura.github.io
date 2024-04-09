import BodyList from "@/components/Body/BodyList";
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import content from '@/content/content.json';
import data from './traits';
import BodyHeader from "@/components/Body/BodyHeader";

const classNames = {
  body: 'flex flex-col px-6 space-y-6',
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
          header="My preferences"
        />
        <BodyHeader>Personality: <a href="https://www.16personalities.com/intj-personality">INTJ-A</a></BodyHeader>
        <div className="flex justify-center items-center h-36">PERSONALITY WIP</div>
      </div>

      <CardFooter home skills />
    </>
  );
}