import html from "../assets/html.png";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.png";
import react from "../assets/reactjs.png";
import git from "../assets/git.png";
import node from "../assets/node.png";

function Experiance() {
  const skills = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: react, name: "ReactJS" },
    { id: 5, logo: git, name: "Git" },
    { id: 6, logo: node, name: "Node" },
  ];

  return (
    <div
      name="Experiances"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            My <span className="text-purple-400">Skills</span>
          </h1>
          <p className="mt-4 text-gray-400">
            As a fresher, I have hands-on practice in the following
            technologies.
          </p>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-3 hover:shadow-purple-500/40 transition duration-500"
            >
              <img src={logo} alt={name} className="w-20 h-20 mx-auto mb-4" />
              <h2 className="text-xl font-semibold">{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
