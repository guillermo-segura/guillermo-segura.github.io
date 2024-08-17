import { CardHeader } from "@/components/Card/CardHeader";
import { CardSection } from '@/components/Card/CardSection';
import CardFooter from "@/components/Card/CardFooter";
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