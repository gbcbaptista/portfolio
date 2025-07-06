import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@/app/icon.svg";

const CardHeader = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src={Icon.src} alt="Ícone GB" className="h-12 w-12" />

          <h1 className="text-4xl font-bold">Gabriel Baptista</h1>
        </div>

        <p className="text-lg text-accent">
          🚀 Full Stack Engineer | AI Engineer Enthusiast
        </p>
      </div>

      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/gabriel-baptista-70a3bb1a0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-primaryText text-3xl transition-all duration-300 hover:text-accentColor hover:scale-110"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/gbcbaptista"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-primaryText text-3xl transition-all duration-300 hover:text-accentColor hover:scale-110"
        >
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
        </a>
      </div>
    </>
  );
};

export default CardHeader;
