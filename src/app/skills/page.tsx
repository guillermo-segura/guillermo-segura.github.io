import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import content from '@/content/content.json';
import data from './skills';
import CardBody from "@/components/Card/CardBody";
import BodySection from "@/components/Body/BodySection";
import BlueLink from "@/components/BlueLink/BlueLink";
import QuestionMark from '@/assets/icons/question-solid-black.svg';
import Image from "next/image";

const specialisedGeneralistLink = 'https://creative.artisantalent.com/specialized-generalist#:~:text=Specialized%20Generalists%2C%20AKA%20T%2Dshaped,in%20the%20%E2%80%9CT%E2%80%9D).';

const classNames = {
  skillsContainer: 'flex flex-row space-x-4',
  skillsCard: 'w-1/3 rounded-xl p-4 shadow-md',
  header: 'text-lg font-mono mb-2 font-bold text-center px-1 w-max mx-auto cursor-pointer',
  green: 'bg-green-300 hover:bg-green-400',
  lightGreen: 'bg-green-100 hover:bg-green-200',
  yellow: 'bg-yellow-100 hover:bg-yellow-200',
  tagsContainer: 'flex flex-wrap justify-center',
  tag: 'px-1.5 py-0.5 w-max rounded-md border border-dashed border-stone-300 m-1 text-sm font-mono',
}

export default function Page() {
  const mapSkill = (skill: string) => (<div className={classNames.tag} key={skill}>{skill}</div>);
  const mapSkills = (skills: string[]) => skills.map(mapSkill);
  return (
    <>
      <CardHeader header={content.skills.header} />

      {/* CARD BODY */}
      <CardBody>  
        <BodySection>
          {content.skills.content[1]}
          &nbsp;
          <BlueLink href={specialisedGeneralistLink}>{content.skills.content[2]}</BlueLink>.
        </BodySection>

        <div className={classNames.skillsContainer}>
          <div className={classNames.skillsCard}>
            <div className={classNames.header.concat(' ', classNames.green)}>Experienced at 💪🏼</div>
            <div className={classNames.tagsContainer}>
              {Object.values(data.S).map(mapSkills)}
            </div>
          </div>

          <div className={classNames.skillsCard}>
            <div className={classNames.header.concat(' ', classNames.lightGreen)}>Working knowledge 👌🏼</div>
            <div className={classNames.tagsContainer}>
              {Object.values(data.A).map(mapSkills)}
            </div>
          </div>

          <div className={classNames.skillsCard}>
            <div className={classNames.header.concat(' ', classNames.yellow)}>Work in progress 🚧</div>
            <div className={classNames.tagsContainer}>
              {Object.values(data.B).map(mapSkills)}
            </div>
          </div>
        </div>
      </CardBody>

      {/* CARD FOOTER */}
      <CardFooter home traits />
    </>
  );
}