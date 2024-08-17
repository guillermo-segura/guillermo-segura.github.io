import { CardHeader, CardSection, CardFooter } from "@/components/Card";
import { Text } from "@/components/Text/Text";

import content from '@/content/content.json';

export default function Page() {
  return (
    <>
      <CardHeader
        header={content.me.header}
        description={content.me.description}
      />

      <CardSection blue>
        <Text variant="subtext">{content.me.content}</Text>
      </CardSection>

      <CardFooter skills traits />
    </>
  );
}