// In a real project, you would first run: npm install react-icons
import { 
    SiPython, SiPandas, SiNumpy, SiR, SiTableau, 
     SiLooker, SiMysql, SiOracle, 
    SiPostgresql, SiMongodb, SiGooglecolab, SiGithub, SiJenkins, 
    SiKubernetes, SiDocker,  SiPostman, SiJira, 
    SiJupyter 
} from 'react-icons/si';
import { FaDatabase, FaChartBar } from 'react-icons/fa';



// --- Scrolling Banner Component ---
const ScrollingTechBanner = () => {
  // Array of technology icons. We use react-icons here.
  const technologies = [
    { Icon: FaDatabase },          // SQL
    { Icon: SiPython },
    { Icon: SiPandas },
    { Icon: SiNumpy },
    //{ Icon: SiMatplotlib },
    { Icon: FaChartBar },          // Seaborn
    { Icon: SiR },
    //{ Icon: SiPowerbi },
    { Icon: SiTableau },
    //{ Icon: SiAmazonaws },         // Amazon QuickSight
    //{ Icon: SiMicrosoft },         // Microsoft Fabric
    { Icon: SiLooker },
    { Icon: SiMysql },
    //{ Icon: SiMicrosoftsqlserver },
    { Icon: SiOracle },
    { Icon: SiPostgresql },
    { Icon: SiMongodb },
    { Icon: SiGooglecolab },
    { Icon: SiGithub },
    //{ Icon: SiAmazonaws },
    //{ Icon: SiMicrosoftazure },
    { Icon: SiJenkins },
    { Icon: SiKubernetes },
    { Icon: SiDocker },
    //{ Icon: SiMicrosoftexcel },
    { Icon: SiPostman },
    { Icon: SiJira },
   // { Icon: SiVisualstudio },
    { Icon: SiJupyter },
  ];

  // The key to a seamless loop is to duplicate the content.
  const extendedTechnologies = [...technologies, ...technologies];

  return (
    // The "mask" container that hides the overflow.
<div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-zinc-800 py-2 rounded-xl border border-zinc-700">
  <div className="flex animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
    {extendedTechnologies.map(({ Icon }, index) => (
      <div
        key={index}
        className="flex-shrink-0 flex items-center justify-center mx-3 h-12 w-12 bg-black rounded-full shadow-md"
      >
        <Icon className="text-gray-300 text-2xl" />
      </div>
    ))}
  </div>
  {/* Optional: Fade edges */}
  <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-zinc-800 to-transparent"></div>
  <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-zinc-800 to-transparent"></div>
</div>

  );
};
export default ScrollingTechBanner;