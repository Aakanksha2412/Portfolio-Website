import { CircleHelp  } from 'lucide-react';
import { FaChartPie ,FaMicrosoft ,FaPython, FaAws, FaDocker, FaGithub, FaJenkins, FaRProject  } from 'react-icons/fa';
import {
  SiPandas, SiNumpy, SiKubernetes, SiGooglecolab,SiMysql ,
   SiTableau, SiOracle, SiPostgresql,
  SiLooker, SiJupyter, SiPostman, SiJira,SiMongodb  
} from 'react-icons/si';
import { BsBarChartFill } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { VscVscode,VscAzure ,VscAzureDevops  } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import Particle from '../components/Particle';
import { GenericToolIcon } from '../components/GenericToolIcon';
import FooterBlock from '../components/FooterBlock';

// --- Skills Data ---
const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "SQL", icon: AiOutlineConsoleSql },
      { name: "Python", icon: FaPython },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: FaChartPie  },
      { name: "Seaborn" ,icon: CircleHelp },
      { name: "R", icon: FaRProject }
    ]
  },
  {
    category: "Data Analysis & Visualization",
    skills: [
      { name: "Power BI", icon: BsBarChartFill },
      { name: "Tableau", icon: SiTableau },
      { name: "Amazon QuickSight" },
      { name: "Microsoft Fabric", icon: FaMicrosoft },
      { name: "Looker", icon: SiLooker }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQL Server", icon: DiMsqlServer },
      { name: "Oracle", icon: SiOracle },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb }
    ]
  },
  {
    category: "Cloud-Based Development",
    skills: [
      { name: "Google Colab", icon: SiGooglecolab },
      { name: "GitHub", icon: FaGithub },
      { name: "AWS", icon: FaAws },
      { name: "Azure DevOps", icon: VscAzure },
      { name: "Jenkins", icon: FaJenkins },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: FaDocker }
    ]
  },
  {
    category: "Tools and Platforms",
    skills: [
      { name: "Excel", icon: PiMicrosoftExcelLogoFill },
      { name: "Postman", icon: SiPostman },
      { name: "Azure DevOps", icon: VscAzureDevops  },
      { name: "GitHub", icon: FaGithub },
      { name: "Jira", icon: SiJira },
      { name: "Visual Studio", icon: VscVscode  },
      { name: "Jupyter", icon: SiJupyter }
    ]
  }
];

// --- Sub-components ---
const SkillItem = ({ name, icon: Icon }) => (
  <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 flex items-center space-x-4 hover:bg-zinc-700 hover:border-lime-300 transition-all duration-200 cursor-pointer">
    {Icon ? <Icon className="text-lime-400 w-6 h-6" /> : <GenericToolIcon />}
    <span className="font-semibold text-sm text-gray-200">{name}</span>
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="bg-black/20 p-6 rounded-lg border border-zinc-800 shadow-md">
    <h3 className="font-bold text-lime-300 mb-4 text-lg">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map(skill => <SkillItem key={skill.name} {...skill} />)}
    </div>
  </div>
);

// --- Main Skills Page Component ---
const SkillsPage = () => {
  return (
    <section className="relative py-10 px-6 md:px-12 min-h-screen bg-black z-10">
      <Particle />
      <div className="relative z-20 max-w-5xl mx-auto space-y-12">

        {/* 1. Page Header */}
        <div className="bg-lime-400 text-black text-center p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Technical Skills</h1>
        </div>

        {/* 2. Intro Text */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Here is a summary of my technical capabilities, from programming languages and databases to cloud platforms and data visualization tools. These are the skills I leverage to build efficient data pipelines, insightful dashboards, and robust applications.
        </p>

        {/* 3. Skills Grid */}
        <div className="space-y-10">
          {skillsData.map(category => (
            <SkillCategory key={category.category} title={category.category} skills={category.skills} />
          ))}
        </div>
          <FooterBlock />
      </div>
    </section>
  );
};

export default SkillsPage;
