import { memo } from "react";
import linkedInIcon from "@/assets/icons/linkedin.svg";
import linkedInBlueIcon from "@/assets/icons/linkedin_blue.svg";
import gitHubIcon from "@/assets/icons/github.svg";
import gitHubBlueIcon from "@/assets/icons/github_blue.svg";

import { IconLink } from "@/components/IconLink/IconLink";
import { joinStringArrays } from "@/utils";

const style = {
  container: [
    "flex",
    "justify-between",
    "items-center",
    "p-6",
    "sm:px-12",
    "xs:flex-row",
  ],
  iconsContainer: ["flex", "flex-row", "space-x-4", "mt-6", "xs:mt-0"],
};

const LINKEDIN_URL = "https://www.linkedin.com/in/g-segura/";
const GITHUB_URL = "https://github.com/guillermo-segura";

const CardFooterRaw = () => {
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
    </footer>
  );
};

export const CardFooter = memo(CardFooterRaw);
