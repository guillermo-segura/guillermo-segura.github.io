import BodyList from "@/components/Body/BodyList";
import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import content from '@/content/content.json';
import data from './skills';

const classNames = {
  body: 'flex flex-col px-6 space-y-6',
};

export default function Page() {
  return (
    <>
      <CardHeader
        header={content.skills.header}
        description={content.skills.description}
      />

      {/* CARD BODY */}
      <div className={classNames.body}>
        <BodyList
          data={data.S}
          header="What I'm very good at 🎖️"
          description="Skills that I have used extensively at work or in personal projects"
        />
        <BodyList
          data={data.A}
          header="What I have working knowledge 🥈"
          description="Skills that have been relevant in specific situations at work or certificates I've obtained but no real experience"
        />
        <BodyList
          data={data.B}
          header="What is my work in progress 👷🏼‍♂️"
          description="Skills that I'm familiar with but I'm still working on"
        />
      </div>

      {/* CARD FOOTER */}
      <CardFooter home traits />
    </>
  );
}