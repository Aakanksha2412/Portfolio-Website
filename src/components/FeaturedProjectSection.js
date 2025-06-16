import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const featuredProjects = [
 {
            title: "Reddit Sentiment Analysis",
            description: "Developed NLP pipelines to analyze sentiment from WallStreetBets posts using Python, Vader, and LSTM models, improving model efficiency by 20%.",
            image: "https://placehold.co/400x250/262626/ffffff?text=Reddit+NLP",
            tags: ['Python', 'NLP', 'Pandas', 'LSTM'],
            projectLink: "https://github.com/Aakanksha2412/Reddit-WallStreetBets-Sentiment-Analysis"
        },
 {
            title: "Uber-Rides Data Analysis",
            description: "Collected, cleaned, and analyzed Uber ride data to uncover usage patterns. Created interactive dashboards to support operational planning and marketing strategies.",
            image: "https://placehold.co/400x250/262626/ffffff?text=Uber+Analysis",
            tags: ['Python', 'Matplotlib', 'Seaborn', 'Jupyter'],
            projectLink: "https://github.com/Aakanksha2412/Uber-Rides-Data-Analysis"
        },
  {
            title: "Portfolio Website",
            description: "My personal portfolio website built from scratch to showcase my skills and projects, designed with a modern aesthetic using React and Tailwind CSS.",
            image: "https://placehold.co/400x250/262626/ffffff?text=Portfolio",
            tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
            projectLink: "https://github.com/Aakanksha2412/Portfolio-Website"
    }
];
// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FeaturedProjectsSection = () => {
  return (
    <section className="relative py-16 px-6 bg-black text-white overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Recent Projects</h2>
        <p className="text-gray-400 mb-10">A quick glance at some of my latest work.</p>

        <motion.div className="grid md:grid-cols-3 gap-8 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <Link
          to="/projects"
          className="mt-12 inline-block bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;