import { CardHeader, CardSection, CardFooter } from '@/components/Card';
import { Text } from '@/components/Text/Text';
import { BlogCard } from '@/components/BlogCard/BlogCard';
import { joinStringArrays } from '@/utils';
import content from '@/content/blog.json';

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
      <CardHeader header={content.header} />

      <CardSection blue spaceY={6}>
        <Text variant="subtext">{content.content[1]}</Text>
      </CardSection>

      <CardSection>
        <div className={joinStringArrays(style.blogsContainer)}>
          {content.articles.map((article) => (
            <div className={joinStringArrays(style.blog)} key={article.title}>
              <BlogCard
                title={article.title}
                description={article.description}
                url={article.url}
              />
            </div>
          ))}
        </div>
      </CardSection>

      <CardFooter home traits skills />
    </>
  );
}