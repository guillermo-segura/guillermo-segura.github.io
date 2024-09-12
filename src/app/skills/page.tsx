import { CardHeader, CardSection, CardFooter } from '@/components/Card';
import { ChipList } from '@/components/Chip';
import { Text } from '@/components/Text/Text';
import { joinStringArrays } from '@/utils';
import content from '@/content/skills.json';
import { topSkills, avgSkills, wipSkills } from './skills';

const style = {
  listsContainer: [
    'flex',
    'flex-col',
    'space-y-6',
    'sm:flex-row',
    'sm:space-y-0',
    'sm:space-x-4',
  ],
  list: ['w-full', 'sm:w-1/3'],
}

export default function Page() {
  return (
    <>
      <CardHeader header={content.header} />

      <CardSection blue spaceY={6}>
        <Text variant="subtext">{content.content[1]}</Text>
        <Text variant="subtext">{content.content[2]}</Text>
      </CardSection>

      <CardSection>  
        <div className={joinStringArrays(style.listsContainer)}>
          <div className={joinStringArrays(style.list)}>
            <ChipList label={content.cards[1]} labelColor="green" items={topSkills} />
          </div>
          <div className={joinStringArrays(style.list)}>
            <ChipList label={content.cards[2]} labelColor="blue" items={avgSkills} />
          </div>
          <div className={joinStringArrays(style.list)}>
            <ChipList label={content.cards[3]} labelColor="yellow" items={wipSkills} />
          </div>
        </div>
      </CardSection>
    </>
  );
}