import { BlogCard } from "@/components/BlogCard/BlogCard";
import { CardHeader, CardSection } from "@/components/Card";
import { Text } from "@/components/Text/Text";
import content from "@/content/blog.json";

export default function Page() {
  return (
    <>
      <CardHeader header={content.header} />

      <CardSection blue withShadow spaceY={6}>
        <Text variant="subtext">{content.content[1]}</Text>
      </CardSection>

      <CardSection spaceY={6}>
        {content.articles.map((article) => (
          <BlogCard
            key={article.title}
            title={article.title}
            description={article.description}
            time={article.time}
            href={article.href}
          />
        ))}
      </CardSection>
    </>
  );
}
