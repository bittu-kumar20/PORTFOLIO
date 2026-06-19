function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-4xl font-bold tracking-wide text-gray-700">About</h1>
      <p>
        Hello, Im Bittu, a passionate Web developer with a keen eye for MERN
        Stack . With a background in IT, I strive to create impactful and
        visually stunning Software solutions that leave a lasting impression.
      </p>
      <br />
      <section className="mt-10 max-w-4xl mx-auto ">
        <h1
          className="text-3xl font-bold text-transparent bg-clip-text 
                 bg-gradient-to-r from-green-500 to-emerald-700 
                 mb-8"
        >
          Education & Training
        </h1>

        <div className="space-y-8 mx-auto max-w-3xl">
          {/* B.Tech */}
          <div
            className="group relative bg-gradient-to-r from-green-50 to-emerald-100 
                  border-l-4 border-green-500
                  rounded-2xl p-6 shadow-md 
                  transition-all duration-500 
                  hover:-translate-y-2 hover:shadow-2xl"
          >
            <h2
              className="text-xl font-semibold text-gray-800 
                   group-hover:text-green-700 transition duration-300"
            >
              Bachelor of Technology (B.Tech) – Computer Science
            </h2>

            <p className="text-gray-700 mt-2 font-medium">
              SILVER OAK UNIVERSITY
            </p>

            <p className="text-sm text-gray-600">2022 – 2026</p>
          </div>

          {/* 12th */}
          <div
            className="group relative bg-gradient-to-r from-blue-50 to-indigo-100 
                  border-l-4 border-blue-500
                  rounded-2xl p-6 shadow-md 
                  transition-all duration-500 
                  hover:-translate-y-2 hover:shadow-2xl"
          >
            <h2
              className="text-xl font-semibold text-gray-800 
                   group-hover:text-blue-700 transition duration-300"
            >
              Higher Secondary (12th Grade)
            </h2>

            <p className="text-gray-700 mt-2 font-medium">GAYA COLLEGE GAYA</p>

            <p className="text-sm text-gray-600">2019 – 2021</p>
          </div>

          {/* 10th */}
          <div
            className="group relative bg-gradient-to-r from-purple-50 to-pink-100 
                  border-l-4 border-purple-500
                  rounded-2xl p-6 shadow-md 
                  transition-all duration-500 
                  hover:-translate-y-2 hover:shadow-2xl"
          >
            <h2
              className="text-xl font-semibold text-gray-800 
                   group-hover:text-purple-700 transition duration-300"
            >
              Secondary School (10th Grade)
            </h2>

            <p className="text-gray-700 mt-2 font-medium">DAV PUBLIC SCHOOL</p>

            <p className="text-sm text-gray-600">2019</p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <section className="mt-12 max-w-4xl mx-auto">
        <h1
          className="text-3xl font-bold text-transparent bg-clip-text 
                 bg-gradient-to-r from-green-500 to-emerald-700 
                 mb-8"
        >
          Skills & Expertise
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 
                    text-white p-6 rounded-2xl shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-400">
              Technical Skills
            </h2>

            <div className="space-y-4">
              {/* C Language */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>C Programming</span>
                  <span>Basic</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
                </div>
              </div>

              {/* Frontend */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Frontend Development</span>
                  <span>Intermediate</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div
            className="bg-gradient-to-br from-green-50 to-emerald-100 
                    p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-700">
              Professional Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                Problem Solving
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                Communication
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                Team Collaboration
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                Responsive Design
              </span>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <section className="mt-12 max-w-4xl mx-auto">
        <h1
          className="text-3xl font-bold text-transparent bg-clip-text 
                 bg-gradient-to-r from-green-500 to-emerald-700 
                 mb-8"
        >
          Professional Experience
        </h1>

        <div className="space-y-6">
          {/* Job Seeking Card */}
          <div
            className="bg-gradient-to-r from-green-50 to-emerald-100 
                    border-l-4 border-green-500 
                    p-6 rounded-2xl shadow-md 
                    hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Aspiring Frontend Developer
            </h2>

            <p className="text-gray-600 mt-2">
              Fresher actively seeking entry-level opportunities to apply and
              grow frontend development skills.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Available for internships & full-time roles
            </p>
          </div>

          {/* Academic Projects */}
          <div
            className="bg-white shadow-md rounded-2xl p-6 
                    hover:-translate-y-1 hover:shadow-lg 
                    transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Academic & Personal Projects
            </h2>

            <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
              <li>
                Built responsive frontend layouts using HTML, CSS, and Tailwind.
              </li>
              <li>
                Developed small projects to practice C programming fundamentals.
              </li>
              <li>
                Focused on improving UI design and problem-solving skills.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <br />
      <br />
      <section className="mt-12 max-w-4xl mx-auto">
        <h1
          className="text-3xl font-bold text-transparent bg-clip-text 
                 bg-gradient-to-r from-green-500 to-emerald-700 
                 mb-8"
        >
          Achievements & Certifications
        </h1>

        <div className="space-y-6">
          {/* NPTEL Certificate */}
          <div
            className="bg-white shadow-md rounded-2xl p-6 
                    border-l-4 border-green-500 
                    hover:shadow-xl hover:-translate-y-1 
                    transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              NPTEL Certification
            </h2>

            <p className="text-gray-600 mt-2">
              Successfully completed an NPTEL online certification course,
              demonstrating strong understanding of core technical concepts.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Issued by NPTEL | Government of India Initiative
            </p>
          </div>

          {/* DCA Certificate */}
          <div
            className="bg-white shadow-md rounded-2xl p-6 
                    border-l-4 border-blue-500 
                    hover:shadow-xl hover:-translate-y-1 
                    transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Diploma in Computer Applications (DCA)
            </h2>

            <p className="text-gray-600 mt-2">
              Completed Diploma in Computer Applications covering fundamental
              computer skills, MS Office, and programming basics.
            </p>

            <p className="text-sm text-gray-500 mt-2">Certified Program</p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <section className="mt-12 max-w-4xl mx-auto">
        <h1
          className="text-3xl font-bold text-transparent bg-clip-text 
                 bg-gradient-to-r from-green-500 to-emerald-700 
                 mb-6"
        >
          Mission Statement
        </h1>

        <div
          className="bg-gradient-to-r from-green-50 to-emerald-100 
                  p-6 rounded-2xl shadow-md border-l-4 border-green-500"
        >
          <p className="text-gray-700 leading-relaxed">
            My mission is to build clean, responsive, and user-friendly web
            applications that provide meaningful digital experiences. As an
            aspiring Frontend Developer, I am committed to continuously
            improving my skills in modern web technologies and problem-solving.
            I aim to contribute to innovative projects where I can grow
            professionally while delivering high-quality solutions.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
