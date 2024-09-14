import { memo } from "react";
import { Text } from "@/components/Text/Text";
import { CardSection } from "@/components/Card";
import { BodyListGroup } from "@/components/Body";

import data from "@/app/traits/traits";
import content from "@/content/traits.json";

const PreferencesSectionRaw = () => (
  <CardSection withShadow blue spaceY={6}>
    <Text variant="h3" textAlign="center">{content.sectionHeader.whatILike}</Text>
    <BodyListGroup data={data.preferences} />
  </CardSection>
);

export const PreferencesSection = memo(PreferencesSectionRaw);
