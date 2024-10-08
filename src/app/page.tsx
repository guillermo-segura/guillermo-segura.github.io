import { CardHeader, CardSection } from "@/components/Card";
import { Text } from "@/components/Text/Text";

import content from "@/content/home.json";

export default function Page() {
  return (
    <>
      <CardHeader header={content.header} description={content.subheader} />

      <CardSection blue withShadow spaceY={6}>
        <Text variant="subtext">{content.description}</Text>
      </CardSection>
    </>
  );
}
