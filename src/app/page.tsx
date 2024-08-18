import { CardHeader, CardSection, CardFooter } from '@/components/Card';
import { Text } from '@/components/Text/Text';

import content from '@/content/content.json';

export default function Page() {
  return (
    <>
      <CardHeader
        header={content.home.header}
        description={content.home.description}
      />

      <CardSection blue>
        <Text variant="subtext">{content.home.content}</Text>
      </CardSection>

      <CardFooter skills traits blog />
    </>
  );
}