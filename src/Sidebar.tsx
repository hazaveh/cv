import Skill from "./Skill.tsx";

interface Props {
  skills: Skill[];
  secondarySkills: string[];
  languages: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

export default function Sidebar({ skills, languages, secondarySkills }: Props) {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-wide">Skills</h2>
      <ul>
        {skills.map(({ name, level }: Skill, index) => (
          <li key={index}>
            <Skill name={name} level={level} />
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold tracking-wide">Also Used</h2>
      <p>I also have experience with:</p>
      <div className="flex gap-x-1 gap-y-1 flex-wrap text-xs">
        {secondarySkills.map((skill: string, index: number) => (
          <span
            className="bg-indigo-600 text-white px-1 py-0.5 rounded"
            key={index}
          >
            {skill}
          </span>
        ))}
      </div>
      <h2 className="text-2xl font-semibold tracking-wide">Languages</h2>
      <ul>
        {languages.map(({ name, level }: Skill, index) => (
          <li key={index}>
            <Skill name={name} level={level} />
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold tracking-wide">Wrok Philosopy</h2>
      <p className="text-justify">
        I am driven by a strong desire for growth and excellence. With a curious
        and creative mindset, I tackle every task, always seeking innovative
        solutions. I am proactive in taking initiative and continuously
        learning, embracing diverse perspectives and methodologies. When
        necessary, I even develop my own frameworks to achieve the best results.
        I am not afraid to think outside the books!
      </p>
    </>
  );
}
