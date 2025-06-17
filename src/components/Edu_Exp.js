// --- Helper Icons ---
const GraduationCapIcon = () => (
    <svg className="w-8 h-8 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0122 12v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6c0-1.933 1.567-3.5 3.5-3.5a2.5 2.5 0 012.5 2.5V14"></path>
    </svg>
);

const BriefcaseIcon = () => (
    <svg className="w-8 h-8 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
);

const CheckmarkIcon = () => (
    <svg className="w-5 h-5 text-lime-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);
// --- Education Section ---
const EducationSection = () => (
    <section>
        <div className="bg-lime-400 text-black text-center p-4 rounded-lg mb-8">
            <h1 className="text-3xl font-bold uppercase tracking-wider">Education</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EducationCard 
                university="Syracuse University"
                degree="M.S. Information Systems"
                gpa="3.9"
                dates="August 2023 - May 2025"
            />
            <EducationCard 
                university="Savitribai Phule Pune University"
                degree="B.E. Information Technology"
                gpa="3.8"
                dates="August 2017 - May 2021"
            />
        </div>
    </section>
);

const EducationCard = ({ university, degree, gpa, dates }) => (
    <div className="bg-black/20 p-6 rounded-lg border border-zinc-800 space-y-3 transition-all duration-300 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-500/10">
        <GraduationCapIcon />
        <h3 className="text-xl font-bold text-white">{university}</h3>
        <p className="font-semibold text-lime-300">{degree}</p>
        <div className="flex justify-between items-center text-sm text-zinc-400">
            <span>GPA: {gpa}</span>
            <span>{dates}</span>
        </div>
    </div>
);

// --- Work Experience Section ---
const ExperienceSection = () => {
    const experiences = [
        {
            role: "Data Engineer Intern",
            company: "iConsult Collaborative at Syracuse University",
            dates: "August 2023 – May 2025",
            points: [
                "Identified and mapped relevant fields, KPIs, and metrics for data migration based on stakeholder requirements.",
                "Designed and automated ETL pipelines using Python, resulting in a 60% improvement in processing speed.",
                "Streamlined workflows by organizing large datasets, improving data readiness for faster business reporting.",
                "Built custom dashboards in Power BI and Tableau for analysis and strategic decision-making."
            ]
        },
        {
            role: "Software Developer",
            company: "Nihilent Ltd",
            dates: "August 2021 – March 2023",
            points: [
                "Delivered end-to-end data projects using Agile, CI/CD, and Azure DevOps.",
                "Authored Software Requirements Specifications (SRS) to optimize large dataset processing.",
                "Built scalable data models and analytical workflows, enhancing UX and efficiency by 25%.",
                "Automated 36+ Python, SQL, and Excel scripts for data manipulation and reporting.",
                "Debugged and resolved 15+ post-release issues, improving system stability."
            ]
        }
    ];

    return (
        <section>
            <div className="bg-lime-400 text-black text-center p-4 rounded-lg mb-12">
                <h1 className="text-3xl font-bold uppercase tracking-wider">Work Experience</h1>
            </div>
            <div className="relative">
                {/* The vertical timeline bar - responsive positioning */}
                <div className="absolute left-5 top-0 h-full w-0.5 bg-zinc-700 md:left-1/2 md:-translate-x-1/2"></div>
                
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} side={index % 2 === 0 ? 'left' : 'right'} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceItem = ({ role, company, dates, points, side }) => (
    <div className={`relative flex items-start w-full`}>
        {/* The timeline node */}
        <div className="absolute left-1/2 top-5 w-4 h-4 bg-zinc-900 border-2 border-lime-300 rounded-full -translate-x-1/2 z-10"></div>
        
        <div className={`w-1/2 ${side === 'left' ? 'pr-8' : 'pl-8 ml-auto'}`}>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 space-y-3">
                <BriefcaseIcon />
                <h3 className="text-xl font-bold text-white">{role}</h3>
                <p className="font-semibold text-lime-300">{company}</p>
                <p className="text-sm text-zinc-400">{dates}</p>
                <ul className="space-y-2 pt-2">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <CheckmarkIcon />
                            <span className="text-sm text-gray-300">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const EducationExperiencePage = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-16">
            <EducationSection />
            <ExperienceSection />
        </div>
    );
};

export default EducationExperiencePage;