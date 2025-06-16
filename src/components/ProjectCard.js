import { ArrowRight } from 'lucide-react';


const ProjectCard = ({ title, description, image, tags, projectLink }) => {
  return (
    <div className="border border-gray rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:border-lime-300 hover:shadow-lime-500/20 hover:scale-[1.02] flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/400x250/262626/ffffff?text=Image+Not+Found';
      }} />

      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-semibold mb-2 text-lime-400">{title}</h4>
        <p className="text-gray-400 text-sm mb-5 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-zinc-800 text-lime-300 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center bg-lime-400 text-black hover:bg-lime-400 font-semibold py-3 px-6 rounded-full transition duration-300 shadow hover:shadow-xl hover:-translate-y-[2px]"
        >
          View Project <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};


export default ProjectCard;
