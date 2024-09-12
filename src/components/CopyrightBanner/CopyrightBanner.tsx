import { memo } from 'react';
import { Text } from '@/components/Text/Text';

const CopyrightBannerRaw = () => (
  <Text variant="copyright" color="white" textAlign="center">
    © {new Date().getFullYear()} Guillermo Segura. All rights reserved.
  </Text>
);

export const CopyrightBanner = memo(CopyrightBannerRaw);
