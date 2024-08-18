import { CardHeader, CardSection, CardFooter } from '@/components/Card';
import { Text } from '@/components/Text/Text';

import { home } from '@/content/content.json';

export default function Page() {
  return (
    <>
      <CardHeader
        header={home.header}
        description={home.description}
      />

      <CardSection blue>
        <Text variant="subtext">{home.content}</Text>
      </CardSection>

      <CardFooter skills traits />
    </>
  );
}