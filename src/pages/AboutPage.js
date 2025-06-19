// AboutPage: Displays the detailed "About My Professional Journey" section.
import ScrollingTechBanner from '../components/ScrollingTechBanner';
import Particle from '../components/Particle';
import FooterBlock from '../components/FooterBlock';
import EducationExperiencePage from '../components/Edu_Exp';
import about from '../assets/about.jpg';
import about_bottom from '../assets/about_bottom1.jpg'
// A generic icon placeholder for skills. In a real app, you'd use a library.
const SkillIcon = () => (
  <svg className="w-8 h-8 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);


const DownloadIcon = () => (
    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
);
// --- Skill Card Sub-component ---
const SkillCard = ({ title, content }) => {
  return (
    <div className="bg-zinc-800 border-2 border-zinc-700 rounded-lg p-4 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-black p-2 rounded">
          <SkillIcon />
        </div>
        <h4 className="font-semibold text-xs text-yellow-400 uppercase">{title}</h4>
      </div>
      <p className="text-white-400 text-xs mt-1 flex-grow">
        {content}
      </p>
    </div>
  );
};
// --- About Page Component ---
const AboutPage = () => {
  return (
    <div className="relative">
      {/* Particle background */}
      <Particle />

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 py-10 px-4 md:px-0">
        {/* 1. About Header */}
        <div className="bg-lime-400 text-black text-center p-4 py-6 rounded-lg">
          <h1 className="text-3xl font-extrabold uppercase tracking-wider">About</h1>
        </div>

        {/* 2. Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <img src={about} alt="Portrait of Aakanksha Sonawane" className="w-full h-full object-cover" />
          </div>
          <div className="text-gray-300 space-y-4 text-base leading-relaxed">
            <p>
              A Business Intelligence & Data Analyst with 2 years of experience, with Master's in Information Systems at Syracuse University.
            </p>
            <p>
              My expertise lies in transforming complex data into actionable insights through advanced data cleaning, visualization, and dashboard development using SQL, Power BI, Tableau, and Python.
            </p>
            <p>
              I am passionate about identifying key trends and delivering clear, strategic recommendations in dynamic, hybrid environments.
            </p>
          </div>
        </div>

        {/* 3. Skills Bar */}
        <style>
        {`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        `}
        </style>
        <ScrollingTechBanner />

        {/* 4. Detailed Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard title="Data Analysis & Visualization" content="Building custom dashboards in Power BI and Tableau for analysis and strategic decision-making." />
          <SkillCard title="ETL Pipelines" content="Designing and automating ETL pipelines using Python, achieving a 60% improvement in processing speed." />
          <SkillCard title="Software Development" content="Delivering end-to-end data projects using Agile, CI/CD, and Azure DevOps to improve delivery speed and system reliability." />
          <SkillCard title="Problem Solving" content="Debugging and resolving post-release issues using Python, SQL, and Postman to enhance system stability." />
        </div>

        {/* Education and Experience */}
        <div className="text-white font-sans">
          <div className="container mx-auto p-4 md:p-8">
            <EducationExperiencePage />
          </div>
        </div>
        {/* 5. Leadership Section */}
        <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
          <h3 className="font-bold text-yellow-400 mb-2">Leadership & Mentorship</h3>
          <p className="text-sm text-gray-400">
            As a Data Analytics Club Member and Peer Mentor, I've led over 5 workshops on SQL, Python, and Power BI/Tableau, fostering a collaborative learning environment and sharing my passion for data with others.
          </p>
        </div>

        {/* 6. Mission Statement and Resume Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 text-sm text-gray-300 leading-relaxed">
            <p>
              My goal is to leverage my skills to create useful, engaging, and intuitive data solutions that help people and organizations make better decisions. I am ready to bring your digital visions to life. Let's connect and embark on an exciting journey of innovation together!
            </p>
          </div>
          <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
          <button className="bg-lime-400 text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center text-lg hover:bg-yellow-400 transition-colors">
            <DownloadIcon />
            MY RESUME
          </button>
          </a>
        </div>

        {/* 7. Second Image */}
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <img src={about_bottom} alt="Another lifestyle or professional shot" className="w-full h-full object-cover" />
        </div>
        <FooterBlock />

      </div>
    </div>
  );
};




export default AboutPage;