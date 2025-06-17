import { Mail, Github, Linkedin } from 'lucide-react';
import Particle from '../components/Particle'; 

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-black p-6 md:p-12 min-h-screen flex items-center overflow-hidden"
    >
      {/* Inject Particle in Background */}
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-xl text-center z-10">
        <h3 className="text-4xl font-bold text-white mb-10 flex items-center justify-center">
          <Mail className="inline-block mr-4 text-yellow-400" size={40} /> Get In Touch
        </h3>
        <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
          I'm always excited to connect with fellow data enthusiasts, potential collaborators, or anyone looking to leverage data for impactful solutions. Feel free to reach out!
        </p>
        <div className="flex flex-col space-y-5 items-center">
          <a
            href="mailto:aakanksha778@gmail.com"
            className="group inline-flex items-center justify-center w-full md:w-auto bg-yellow-500 text-gray-900 hover:bg-yellow-600 font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="mr-3 w-6 h-6 group-hover:animate-bounce-y" /> aakanksha778@gmail.com
          </a>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aakanksha-sonawane/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
              title="LinkedIn Profile"
            >
              <Linkedin size={36} />
            </a>
            <a
              href="https://github.com/Aakanksha2412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
              title="GitHub Profile"
            >
              <Github size={36} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
