import ProjectCard from "../components/ProjectCard";
import Particle from "../components/Particle";
import { Briefcase } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
        {
            title: "ETL Weather-Airflow",
            description: "A Python-based ETL pipeline built with Apache Airflow to automate daily extraction, transformation, and loading of weather data from a public API. The project showcases task scheduling, API integration, retry logic, and Airflow’s UI for monitoring and visualization.",
            image: "https://placehold.co/400x250/262626/ffffff?text=ETL+Weather",
            tags: ['Python', 'Airflow', 'REST API', 'ETL', 'Data Pipeline', 'Docker', 'Postgres'],
            projectLink: "https://github.com/Aakanksha2412/ETL_Weather-Airflow"
        },
         {
            title: "Uber-Rides Data Analysis",
            description: "Collected, cleaned, and analyzed Uber ride data to uncover usage patterns. Created interactive dashboards to support operational planning and marketing strategies.",
            image: "https://placehold.co/400x250/262626/ffffff?text=Uber+Analysis",
            tags: ['Python', 'Matplotlib', 'Seaborn','Tableau','Jupyter'],
            projectLink: "https://github.com/Aakanksha2412/Uber-Rides-Data-Analysis"
        },
        {
            title: "Energy Consumption Prediction",
            description: "Assembled predictive models to forecast hourly energy demand, leveraging R and Python for feature engineering on a dataset with over 4 million observations.",
            image: "https://placehold.co/400x250/262626/ffffff?text=Energy+Forecast",
            tags: ['R', 'Python', 'Machine Learning', 'Shiny'],
            projectLink: "https://github.com/Aakanksha2412/Energy-Consumption-Prediction"
        },
        {
            title: "Reddit WallStreetBets Sentiment Analysis",
            description: "Developed NLP pipelines to analyze sentiment from WallStreetBets posts using Python, Vader, GloVe, and LSTM models, improving model efficiency by 20%.",
            image: "https://placehold.co/400x250/262626/ffffff?text=Reddit+NLP",
            tags: ['Python', 'NLP', 'Pandas', 'LSTM'],
            projectLink: "https://github.com/Aakanksha2412/Reddit-WallStreetBets-Sentiment-Analysis"
        },
        {
            title: "NY AirBnB Data Analysis",
            description: "Exploratory data analysis and visualization of NYC AirBnB listings using Python, Pandas, and Seaborn. Uncovered insights on pricing trends, location patterns, and host behavior.",
            image: "https://placehold.co/400x250/262626/ffffff?text=AirBnB+Analysis",
            tags: ['Python', 'Matplotlib', 'Pandas', 'Seaborn','Tableau','Jupyter'],
            projectLink: "https://github.com/Aakanksha2412/NYC_AirBnb-Analysis"
        },
        {
            title: "WealthMitra – Financial Management System",
            description: "Built a full-stack(.Net React) financial management platform to track and analyze personal income and expenses. Developed REST APIs with Node.js, implemented user-specific dashboards in React.js, and integrated Microsoft SQL Server for secure data storage. Enabled insightful visualizations and improved financial planning for users.",
            image: "https://placehold.co/400x250/262626/ffffff?text=WealthMitra+FMS",
            tags: ['.Net', 'C#', 'Angular', 'SQL Server','REST APIs','Full-Stack'],
            projectLink: "https://github.com/Aakanksha2412/WealthMitra"
        },
        {
          title: "Portfolio Website",
          description: "My personal portfolio website built from scratch to showcase my skills and projects, designed with a modern aesthetic using React and Tailwind CSS.",
          image: "https://placehold.co/400x250/262626/ffffff?text=Portfolio",
          tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
          projectLink: "https://github.com/Aakanksha2412/Portfolio-Website"
        }
    ];
  return (
    <section id="projects" className="relative min-h-[calc(100vh-80px-116px)] overflow-hidden py-20">
      {/* Particle Background */}
      <Particle />

      <div className="relative z-10 container mx-auto max-w-6xl px-6 text-center">
        {/* Section Header */}
        
        <h3 className="text-4xl font-bold text-white mb-12 flex items-center justify-center">
          <Briefcase className="inline-block mr-4 text-lime-300" size={40} /> My Projects
        </h3>
     

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
