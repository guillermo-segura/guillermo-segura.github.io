import { memo } from 'react';
import { Text } from '@/components/Text/Text';

const CopyrightBannerRaw = () => (
  <div className="mt-6">
    <Text variant="copyright" color="white" textAlign="center">
      © {new Date().getFullYear()} Guillermo Segura. All rights reserved.
    </Text>
  </div>
);

export const CopyrightBanner = memo(CopyrightBannerRaw);
