import { CardHeader, CardSection, CardFooter } from "@/components/Card";
import { Text } from "@/components/Text/Text";

import { me } from '@/content/content.json';

export default function Page() {
  return (
    <>
      <CardHeader
        header={me.header}
        description={me.description}
      />

      <CardSection blue>
        <Text variant="subtext">{me.content}</Text>
      </CardSection>

      <CardFooter skills traits />
    </>
  );
}