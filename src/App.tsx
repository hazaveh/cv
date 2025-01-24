import Experience from "./Experience";
import Head from "./Head";
import Link from "./Link";
import Project from "./Project";
import Sidebar from "./Sidebar";
import data from "./data.json";

function App() {
  return (
    <div className="p-4 mx-auto">
      <Head bio={data.me.bio} name={data.me.name} />
      <div className="flex gap-x-4 my-5 text-sm text-indigo-700 font-semibold">
        {data.links.map((link, index) => (
          <Link key={index} url={link.url} icon={link.icon} name={link.name} />
        ))}
      </div>
      <div className="flex gap-x-2">
        <div className="basis-3/4 space-y-2">
          <h1 className="text-4xl my-4 font-semibold">Work Experience</h1>
          {data.experience.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
          <h1 className="text-4xl my-4 font-semibold">Projects</h1>
          {data.projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <div className="basis-1/4 bg-slate-200 p-2 rounded space-y-1">
          <Sidebar
            skills={data.skills.sort((a, b) => b.level - a.level)}
            secondarySkills={data.secondarySkills}
            languages={data.languages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
