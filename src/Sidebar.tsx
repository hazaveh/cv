import Skill from "./Skill.tsx";

interface Props {
  skills: Skill[];
  secondarySkills: string[];
  languages: Skill[];
  philosophy: string;
}

interface Skill {
  name: string;
  level: number;
}

export default function Sidebar({
  skills,
  languages,
  secondarySkills,
  philosophy,
}: Props) {
  return (
    <>
      <h1 className="text-2xl">Skills</h1>
      <ul>
        {skills.map(({ name, level }: Skill, index) => (
          <li key={index}>
            <Skill name={name} level={level} />
          </li>
        ))}
      </ul>
      <h1 className="text-2xl">Also Used</h1>
      <p>I also have experience with:</p>
      <div className="flex gap-x-1 gap-y-1 flex-wrap text-xs">
        {secondarySkills.map((skill: string, index: number) => (
          <span
            className="border-cyan-600 border-2 font-semibold text-cyan-800 px-1 py-0.5 rounded"
            key={index}
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="break-inside-avoid">
        <h1 className="text-2xl">Languages</h1>
        <ul>
          {languages.map(({ name, level }: Skill, index) => (
            <li key={index}>
              <Skill name={name} level={level} />
            </li>
          ))}
        </ul>
      </div>
      <div className="break-inside-avoid">
        <h1 className="text-2xl">Work Philosopy</h1>
        <p className="text-justify">{philosophy}</p>
      </div>
    </>
  );
}
