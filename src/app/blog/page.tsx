import { CardHeader, CardSection, CardFooter } from '@/components/Card';
import { BlueLink } from '@/components/BlueLink/BlueLink';
import { Text } from '@/components/Text/Text';
import { BlogCard } from '@/components/BlogCard/BlogCard';
import { joinStringArrays } from '@/utils';
import content from '@/content/content.json';

const MEDIUM_LINK = 'https://medium.com/@viltran.co';

const style = {
  blogsContainer: [
    'flex',
    'flex-col',
    'space-y-6',
  ],
  blog: ['w-full'],
}

export default function Page() {
  return (
    <>
      <CardHeader header={content.blog.header} />

      <CardSection blue spaceY={6}>
        <Text variant="subtext">{content.blog.content[1]}</Text>
        <BlueLink href={MEDIUM_LINK}>
          {content.blog.content[2]}
        </BlueLink>
      </CardSection>

      <CardSection>
        <div className={joinStringArrays(style.blogsContainer)}>
          <div className={joinStringArrays(style.blog)}>
            <BlogCard
              title="Your Career as a Road: How not to Get Lost"
              description="Short article about career progression and how to overcome the difficulties of not knowing what to do next."
              url="https://medium.com/design-bootcamp/your-career-as-a-road-how-not-to-get-lost-3b0601af64cd"
            />
          </div>
        </div>
      </CardSection>

      <CardFooter home traits skills />
    </>
  );
}