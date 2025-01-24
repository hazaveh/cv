import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Props {
  name: string;
  level: number;
}

export default function Skill({ level, name }: Props) {
  const stars = [];
  for (let i = 0; i < level; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        size="sm"
        className="text-indigo-800"
      />
    );
  }
  return (
    <>
      <div className="flex justify-between">
        <span className="tracking-wider text-sm">{name}</span>
        <span>{stars}</span>
      </div>
    </>
  );
}
