import CardFooter from "@/components/Card/CardFooter";
import CardHeader from "@/components/Card/CardHeader";
import CardBody from "@/components/Card/CardBody";
import BlueLink from "@/components/BlueLink/BlueLink";

import content from '@/content/content.json';

import data from './skills';

const specialisedGeneralistLink = 'https://creative.artisantalent.com/specialized-generalist#:~:text=Specialized%20Generalists%2C%20AKA%20T%2Dshaped,in%20the%20%E2%80%9CT%E2%80%9D).';

const classNames = {
  skillsContainer: 'flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-4 mt-12',
  skillsCard: 'w-full sm:w-1/3 rounded-xl p-4 shadow-md',
  header: 'text-base xs:text-lg font-mono mb-2 font-bold text-center max-w-max mx-auto cursor-pointer whitespace-wrap',
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
      <CardBody blue>  
        <span>
          {content.skills.content[1]}
          &nbsp;
          <BlueLink href={specialisedGeneralistLink}>
            {content.skills.content[2]}
          </BlueLink>.
        </span>
      </CardBody>
      <CardBody>  
        <div className={classNames.skillsContainer}>
          <div className={classNames.skillsCard}>
            <div className={classNames.header.concat(' ', classNames.green)}>{content.skills.cards[1]}</div>
            <div className={classNames.tagsContainer}>
              {Object.values(data.S).map(mapSkills)}
            </div>
          </div>

          <div className={classNames.skillsCard}>
            <div className={classNames.header.concat(' ', classNames.lightGreen)}>{content.skills.cards[2]}</div>
            <div className={classNames.tagsContainer}>
              {Object.values(data.A).map(mapSkills)}
            </div>
          </div>

          <div className={classNames.skillsCard}>
            <div className={classNames.header.concat(' ', classNames.yellow)}>{content.skills.cards[3]}</div>
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