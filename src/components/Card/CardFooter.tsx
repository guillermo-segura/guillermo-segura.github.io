import linkedInIcon from '@/assets/icons/linkedin.svg';
import gitHubIcon from '@/assets/icons/square-github.svg';
import IconLink from "../IconLink/IconLink";
import ButtonLink from '../ButtonLink/ButtonLink';

const classNames = {
  container: 'flex flex-row justify-between items-center mt-4 border-t px-6 py-4 shadow-inner',
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/g-segura/';
const GITHUB_URL = 'https://www.linkedin.com/in/g-segura/';

export default function CardFooter({ skills = false, traits = false, home = false }) {
  return (
    <div className={classNames.container}>
      <div className="flex flex-row space-x-4">
        <IconLink href={LINKEDIN_URL} imgSrc={linkedInIcon} />
        <IconLink href={GITHUB_URL} imgSrc={gitHubIcon} />
      </div>

      <div className="flex flex-row space-x-4">
        {home && (
          <ButtonLink label="Go back" href="/me" type="secondary" />
        )}
        {traits && (
          <ButtonLink label="My traits" href="/traits" />
        )}
        {skills && (
          <ButtonLink label="My skills" href="/skills" />
        )}
      </div>
    </div>
  );
}