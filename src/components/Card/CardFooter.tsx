import linkedInIcon from '@/assets/icons/linkedin.svg';
import linkedInBlueIcon from '@/assets/icons/linkedin_blue.svg';
import gitHubIcon from '@/assets/icons/github.svg';
import gitHubBlueIcon from '@/assets/icons/github_blue.svg';

import IconLink from '@/components/IconLink/IconLink';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';

import content from '@/content/content.json';
import { memo } from 'react';

const cn = {
  container: [
    'flex',
    'flex-col-reverse',
    'justify-between',
    'items-center',
    'border-t',
    'border-stone-200',
    'shadow-inner',
    'p-6',
    'sm:px-12',

    'xs:flex-row',
  ],
  iconsContainer: [
    'flex',
    'flex-row',
    'space-x-4',
    'mt-6',
    'xs:mt-0',
  ],
  itemsContainer: [
    'flex',
    'flex-col',
    'space-y-6',
    'xs:space-y-0',
    'xs:flex-row',
    'xs:space-x-4',
  ],
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/g-segura/';
const GITHUB_URL = 'https://github.com/guillermo-segura';

const CardFooterRaw = ({ skills = false, traits = false, home = false }) => {
  return (
    <footer className={cn.container.join(' ')}>
      <div className={cn.iconsContainer.join(' ')}>
        <IconLink
          id="linkedin_icon"
          href={LINKEDIN_URL}
          imgSrc={linkedInIcon}
          hoveredImgSrc={linkedInBlueIcon}
          imgAlt="LinkedIn link"
        />
        <IconLink
          id="github_icon"
          href={GITHUB_URL}
          imgSrc={gitHubIcon}
          hoveredImgSrc={gitHubBlueIcon}
          imgAlt="GitHub link"
        />
      </div>

      {/* <div className="flex flex-row">
        <span className="text-stone-300 font-mono font-sm cursor-pointer p-2">ES 🇪🇸</span>
        <span className="py-2">|</span>
        <span className="font-mono font-sm cursor-pointer p-2">EN 🇬🇧</span>
      </div> */}

      <div className={cn.itemsContainer.join(' ')}>
        {home && (
          <ButtonLink href="/" type="secondary">
            {content.buttons.back}
          </ButtonLink>
        )}
        {traits && (
          <ButtonLink href="/traits">
            {content.buttons.aboutMe}
          </ButtonLink>
        )}
        {skills && (
          <ButtonLink href="/skills">
            {content.buttons.skills}
          </ButtonLink>
        )}
      </div>
    </footer>
  );
}

export const CardFooter = memo(CardFooterRaw);
