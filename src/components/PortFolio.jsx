import cpp from "../assets/cpp.png";
import c from "../assets/clang.png";
import mongoDB from "../assets/mongodb.jpg";
import nodejs from "../assets/node.png";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";

function PortFolio() {
  const cardItem = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "ExpressJS" },
    { id: 3, logo: reactjs, name: "ReactJS" },
    { id: 4, logo: nodejs, name: "NodeJS" },
    { id: 5, logo: c, name: "C" },
    { id: 6, logo: cpp, name: "C++" },
  ];

  return (
    <div
      name="Portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-purple-900 via-black to-gray-900 text-white py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-400">Portfolio</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Technologies & Projects I have worked with
          </p>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-3 hover:shadow-purple-500/50 transition duration-500"
            >
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-purple-500 p-2 bg-white"
              />

              <h2 className="text-2xl font-semibold mt-6">{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
