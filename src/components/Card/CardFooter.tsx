import linkedInIcon from '@/assets/icons/linkedin.svg';
import linkedInBlueIcon from '@/assets/icons/linkedin_blue.svg';
import gitHubIcon from '@/assets/icons/github.svg';
import gitHubBlueIcon from '@/assets/icons/github_blue.svg';

import IconLink from '@/components/IconLink/IconLink';
import ButtonLink from '@/components/ButtonLink/ButtonLink';

import content from '@/content/content.json';

const classNames = {
  container: [
    'flex',
    'flex-col-reverse',
    'justify-between',
    'items-center',
    'border-t',
    'border-stone-200',
    'shadow-inner',
    'p-6',

    'xs:flex-row',
  ].join(' '),
  iconsContainer: [
    'flex',
    'flex-row',
    'space-x-4',
    'mt-6',
    'xs:mt-0',
  ].join(' '),
  itemsContainer: [
    'flex',
    'flex-col',
    'space-y-6',
    'xs:space-y-0',
    'xs:flex-row',
    'xs:space-x-4',
  ].join(' '),
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/g-segura/';
const GITHUB_URL = 'https://github.com/guillermo-segura';

export default function CardFooter({ skills = false, traits = false, home = false }) {
  return (
    <div className={classNames.container}>
      <div className={classNames.iconsContainer}>
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

      <div className={classNames.itemsContainer}>
        {home && (
          <ButtonLink label={content.buttons.back} href="/" type="secondary" />
        )}
        {traits && (
          <ButtonLink label={content.buttons.aboutMe}  href="/traits" />
        )}
        {skills && (
          <ButtonLink label={content.buttons.skills}  href="/skills" />
        )}
      </div>
    </div>
  );
}