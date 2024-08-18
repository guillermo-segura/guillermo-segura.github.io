import { CardHeader, CardSection, CardFooter } from "@/components/Card";
import { BlueLink } from "@/components/BlueLink/BlueLink";
import { Text } from "@/components/Text/Text";
import { skills } from '@/content/content.json';
import data from './skills';
import { Chip } from "@/components/Chip/Chip";

const specialisedGeneralistLink = 'https://en.wikipedia.org/wiki/T-shaped_skills';

const cn = {
  skillsContainer: ['flex', 'flex-col', 'space-y-6', 'sm:flex-row', 'sm:space-y-0', 'sm:space-x-4'],
  skillsCard: ['w-full', 'sm:w-1/3'],
  header: ['max-w-max', 'mx-auto', 'p-0.5', 'mb-2'],
  green: ['bg-green-100'],
  blue: ['bg-blue-100'],
  yellow: ['bg-yellow-100'],
  tagsContainer: ['flex', 'flex-wrap', 'justify-center'],
}

export default function Page() {
  const mapSkill = (skill: string) => (<Chip label={skill} />);
  const mapSkills = (skills: string[]) => skills.map(mapSkill);
  return (
    <>
      <CardHeader header={skills.header} />

      {/* CARD BODY */}
      <CardSection blue spaceY={6}>
        <Text variant="subtext">{skills.content[1]}</Text>
        <BlueLink href={specialisedGeneralistLink}>
          {skills.content[2]}
        </BlueLink>
      </CardSection>
      <CardSection>  
        <div className={cn.skillsContainer.join(' ')}>
          <div className={cn.skillsCard.join(' ')}>
            <div className={[...cn.header, ...cn.green].join(' ')}>
              <Text variant="label">
                {skills.cards[1]}
              </Text>
            </div>
            <div className={cn.tagsContainer.join(' ')}>
              {Object.values(data.S).map(mapSkills)}
            </div>
          </div>

          <div className={cn.skillsCard.join(' ')}>
            <div className={[...cn.header, ...cn.blue].join(' ')}>
              <Text variant="label">
                {skills.cards[2]}
              </Text>
            </div>
            <div className={cn.tagsContainer.join(' ')}>
              {Object.values(data.A).map(mapSkills)}
            </div>
          </div>

          <div className={cn.skillsCard.join(' ')}>
            <div className={[...cn.header, ...cn.yellow].join(' ')}>
              <Text variant="label">
                {skills.cards[3]}
              </Text>
            </div>
            <div className={cn.tagsContainer.join(' ')}>
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