import { CardHeader, CardSection, CardFooter } from '@/components/Card';
import { Text } from '@/components/Text/Text';

import content from '@/content/home.json';

export default function Page() {
  return (
    <>
      <CardHeader
        header={content.header}
        description={content.description}
      />

      <CardSection blue>
        <Text variant="subtext">{content.content}</Text>
      </CardSection>

      <CardFooter skills traits blog />
    </>
  );
}