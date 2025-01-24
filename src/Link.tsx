import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Props {
  icon: string;
  url: string;
  name: string;
}

const icons: { [key: string]: IconDefinition } = {
  faLinkedin: faLinkedin,
  faGithub: faGithub,
  faLink: faLink,
};

function Link({ icon, url, name }: Props) {
  const link = new URL(url);

  return (
    <a href={url} className="gap-x-1 items-center flex">
      <FontAwesomeIcon icon={icons[icon]} />
      <span className="print:hidden tracking-widest">{name}</span>
      <span className="print:block hidden">
        {link.hostname + link.pathname}
      </span>
    </a>
  );
}

export default Link;
