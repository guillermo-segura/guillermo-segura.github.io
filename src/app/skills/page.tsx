import { CardHeader, CardSection, CardFooter } from "@/components/Card";
import BlueLink from "@/components/BlueLink/BlueLink";

import { skills } from '@/content/content.json';

import data from './skills';
import { Text } from "@/components/Text/Text";

const specialisedGeneralistLink = 'https://en.wikipedia.org/wiki/T-shaped_skills';

const cn = {
  skillsContainer: 'flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-4',
  skillsCard: 'w-full sm:w-1/3 rounded-xl p-4 shadow-md',
  header: 'text-base xs:text-lg font-mono mb-2 font-bold text-center max-w-max mx-auto cursor-pointer whitespace-wrap',
  green: 'bg-green-200 hover:bg-green-300',
  lightGreen: 'bg-blue-200 hover:bg-blue-300',
  yellow: 'bg-yellow-100 hover:bg-yellow-200',
  tagsContainer: 'flex flex-wrap justify-center',
  tag: 'px-1.5 py-0.5 w-max rounded-md border border-dashed border-stone-300 m-1 text-sm font-mono',
}

export default function Page() {
  const mapSkill = (skill: string) => (<div className={cn.tag} key={skill}>{skill}</div>);
  const mapSkills = (skills: string[]) => skills.map(mapSkill);
  return (
    <>
      <CardHeader header={skills.header} />

      {/* CARD BODY */}
      <CardSection blue>
        <p>
          <Text variant="subtext">{skills.content[1]}</Text>
          <br />
          <BlueLink href={specialisedGeneralistLink}>
            <Text variant="subtext">{skills.content[2]}</Text>
          </BlueLink>
        </p>
      </CardSection>
      <CardSection>  
        <div className={cn.skillsContainer}>
          <div className={cn.skillsCard}>
            <div className={cn.header.concat(' ', cn.green)}>{skills.cards[1]}</div>
            <div className={cn.tagsContainer}>
              {Object.values(data.S).map(mapSkills)}
            </div>
          </div>

          <div className={cn.skillsCard}>
            <div className={cn.header.concat(' ', cn.lightGreen)}>{skills.cards[2]}</div>
            <div className={cn.tagsContainer}>
              {Object.values(data.A).map(mapSkills)}
            </div>
          </div>

          <div className={cn.skillsCard}>
            <div className={cn.header.concat(' ', cn.yellow)}>{skills.cards[3]}</div>
            <div className={cn.tagsContainer}>
              {Object.values(data.B).map(mapSkills)}
            </div>
          </div>
        </div>
      </CardSection>

      {/* CARD FOOTER */}
      <CardFooter home traits />
    </>
  );
}