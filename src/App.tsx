import Experience from "./Experience";
import Head from "./Head";
import Link from "./Link";
import Project from "./Project";
import Sidebar from "./Sidebar";
import data from "./data.json";
import "animate.css";

function App() {
  return (
    <div className="p-4 print:p-0 mx-auto">
      <div className="animate__animated animate__slideInTop">
        <Head {...data.me} />
        <div className="flex gap-x-4 my-5 text-sm text-cyan-600 font-semibold justify-center">
          {data.links.map((link, index) => (
            <Link key={index} {...link} />
          ))}
        </div>
      </div>
      <div className="flex gap-x-2 flex-col md:flex-row print:flex-row animate__animated animate__zoomIn">
        <div className="md:basis-2/3 print:basis-2/3 space-y-2">
          <h1 className="text-4xl">Work Experience</h1>
          {data.experience.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
          <h1 className="text-4xl">Projects</h1>
          {data.projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <div className="md:basis-1/3 print:basis-1/3 bg-stone-100 p-2 rounded space-y-2">
          <Sidebar
            skills={data.skills.sort((a, b) => b.level - a.level)}
            secondarySkills={data.secondarySkills}
            languages={data.languages}
            philosophy={data.me.philosophy}
          />
        </div>
      </div>
      <footer className="text-center text-xs mt-2">
        To View & Download latest version of my Resume visit
        https://labs.hazaveh.net/resume
      </footer>
    </div>
  );
}

export default App;
