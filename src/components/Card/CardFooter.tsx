import { memo } from 'react';
import linkedInIcon from '@/assets/icons/linkedin.svg';
import linkedInBlueIcon from '@/assets/icons/linkedin_blue.svg';
import gitHubIcon from '@/assets/icons/github.svg';
import gitHubBlueIcon from '@/assets/icons/github_blue.svg';

import { IconLink } from '@/components/IconLink/IconLink';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';
import { joinStringArrays } from '@/utils';

import content from '@/content/content.json';

const style = {
  container: [
    'flex',
    'flex-col-reverse',
    'justify-between',
    'items-center',
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
    'items-center',
    'xs:space-y-0',
    'xs:flex-row',
    'xs:space-x-4',
  ],
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/g-segura/';
const GITHUB_URL = 'https://github.com/guillermo-segura';

const CardFooterRaw = ({ skills = false, traits = false, home = false, blog = false }) => {
  return (
    <footer className={joinStringArrays(style.container)}>
      <div className={joinStringArrays(style.iconsContainer)}>
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

      <div className={joinStringArrays(style.itemsContainer)}>
        {home && (
          <ButtonLink href="/" variant="secondary">
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
        {blog && (
          <ButtonLink href="/blog">
            {content.buttons.blog}
          </ButtonLink>
        )}
      </div>
    </footer>
  );
}

export const CardFooter = memo(CardFooterRaw);
