import { memo } from "react";
import { BodyHeader, BodyListGroup } from "@/components/Body";
import { CardSection } from "@/components/Card";

import data from "@/app/traits/traits";
import content from "@/content/traits.json";

const PreferencesSectionRaw = () => (
  <CardSection>
    <BodyHeader>{content.sectionHeader.whatILike}</BodyHeader>
    <BodyListGroup data={data.preferences} />
  </CardSection>
);

export const PreferencesSection = memo(PreferencesSectionRaw);
