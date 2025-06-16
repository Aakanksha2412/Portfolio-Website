import { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element is in the viewport
const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Set state to true when the element is intersecting
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};


// A single quote component for reusability with animations
const Quote = ({ text, author }) => {
  // Use the custom hook to trigger animation when the component is in view
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      className="relative w-full text-center py-16 md:py-24 border-b-2 border-zinc-800 overflow-hidden"
    >
      {/* Giant decorative quotation mark in the background */}
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[15rem] text-zinc-900 font-serif opacity-80 z-0">
        “
      </span>
      
      {/* The main quote text with staggered word animation */}
      <h2 
        className="relative z-10 text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter leading-tight"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        {text.split(' ').map((word, index) => (
          <span key={index} className="inline-block">
            <span 
              className={`inline-block transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {word}
            </span>
          </span>
        ))}
      </h2>
      
      {/* The author text with a fade-in animation */}
      <p className={`relative z-10 text-zinc-500 mt-8 text-sm font-semibold tracking-widest uppercase transition-opacity duration-1000 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        - {author}
      </p>
    </div>
  );
};

// The main section containing all the quotes
const QuotesSection = () => {
  const quotes = [
    {
      text: "“Without big data, you are blind and deaf and in the middle of a freeway.”",
      author: "Geoffrey Moore"
    },
    {
      text: "“Information is the oil of the 21st century, and analytics is the combustion engine.”",
      author: "Peter Sondergaard"
    }
  ];

  return (
    <div className="max-w-4xl w-full">
      
      {quotes.map((quote, index) => (
        <Quote key={index} text={quote.text} author={quote.author} />
      ))}
    </div>
  );
};
export default QuotesSection;