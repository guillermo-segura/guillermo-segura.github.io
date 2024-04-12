import linkedInIcon from '@/assets/icons/linkedin.svg';
import gitHubIcon from '@/assets/icons/square-github.svg';

import IconLink from '@/components/IconLink/IconLink';
import ButtonLink from '@/components/ButtonLink/ButtonLink';

import content from '@/content/content.json';

const classNames = {
  container: 'flex flex-row justify-between items-center border-t border-stone-200 p-6 shadow-inner',
  itemsContainer: 'flex flex-row space-x-4',
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/g-segura/';
const GITHUB_URL = 'https://github.com/guillermo-segura';

export default function CardFooter({ skills = false, traits = false, home = false }) {
  return (
    <div className={classNames.container}>
      <div className={classNames.itemsContainer}>
        <IconLink href={LINKEDIN_URL} imgSrc={linkedInIcon} />
        <IconLink href={GITHUB_URL} imgSrc={gitHubIcon} />
      </div>

      {/* <div className="flex flex-row">
        <span className="text-stone-300 font-mono font-sm cursor-pointer p-2">ES 🇪🇸</span>
        <span className="py-2">|</span>
        <span className="font-mono font-sm cursor-pointer p-2">EN 🇬🇧</span>
      </div> */}

      <div className={classNames.itemsContainer}>
        {home && (
          <ButtonLink label={content.buttons.back} href="/me" type="secondary" />
        )}
        {traits && (
          <ButtonLink label={content.buttons.aboutMe}  href="/traits" type="secondary" />
        )}
        {skills && (
          <ButtonLink label={content.buttons.skills}  href="/skills" />
        )}
      </div>
    </div>
  );
}