import { CardHeader, CardSection } from "@/components/Card";
import { Text } from "@/components/Text/Text";
import { JourneySection } from "@/app/traits/components/JourneySection";
import { PreferencesSection } from "@/app/traits/components/PreferencesSection";

import content from "@/content/traits.json";

export default function Page() {
  return (
    <>
      <CardHeader header={content.header} />

      <CardSection blue withShadow spaceY={6}>
        <Text variant="subtext">{content.content[1]}</Text>
        <Text variant="subtext">
          {content.content[2]}
          <i>{content.content[3]}</i>
          {content.content[4]}
        </Text>
        <Text variant="subtext">{content.content[5]}</Text>
        <Text variant="subtext">{content.content[6]}</Text>
      </CardSection>

      <JourneySection />

      <PreferencesSection />
    </>
  );
}
