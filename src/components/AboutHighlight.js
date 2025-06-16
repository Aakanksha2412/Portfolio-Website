
const AboutHighlight = () => {
     const keywords = [
    { text: 'Business Intelligence', description: 'Transforming raw data into actionable insights.' },
    { text: 'Data Analyst', description: 'Analyzing data to solve business problems.' },
    { text: 'ETL pipelines', description: 'Automating data extraction, transformation, and loading.' },
    { text: 'actionable insights', description: 'Providing clear, data-driven recommendations.' },
    { text: 'strategic decisions', description: 'Informing business strategy with data.' },
  ];
   const bioText = `
    As a Business Intelligence and Data Analyst, I convert complex data into clear, actionable insights. 
    I create automated ETL pipelines and dynamic visualizations to empower data-driven, strategic decisions, 
    bridging the gap between raw information and tangible business value.
  `;

  // A helper function to create styled, interactive keyword components.
  const createKeywordSpan = (keyword) => (
    <span 
      key={keyword.text} 
      className="text-black-400 font-bold transition-all duration-300 hover:bg-yellow-400 hover:text-black cursor-pointer px-1 rounded"
      title={keyword.description}
    >
      {keyword.text}
    </span>
  );
  // Function to parse the bio text and insert the interactive keywords.
  const renderBioWithKeywords = () => {
    // Create a regex pattern from all the keyword texts.
    const pattern = new RegExp(`(${keywords.map(k => k.text).join('|')})`, 'g');
    
    // Split the bio text by this pattern.
    const parts = bioText.split(pattern);

    return parts.map((part, index) => {
      // Find if the current part matches any of our keywords.
      const keyword = keywords.find(k => k.text === part);
      // If it's a keyword, render the interactive span. Otherwise, just render the text.
      return keyword ? createKeywordSpan(keyword) : <span key={index}>{part}</span>;
    });
  };
  return (
    // Main container for centering the highlight box
<div className="flex items-center justify-center p-4">
      <div className="bg-yellow-400 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 max-w-4xl w-full">
        <div className="text-black text-5xl font-extrabold leading-none tracking-tighter text-center md:text-left">
          ABOUT MYSELF
        </div>
        <div className="text-black text-lg text-center md:text-left">
           
          {renderBioWithKeywords()}
        
        </div>
      </div>
    </div>
  );
};

export default AboutHighlight;
