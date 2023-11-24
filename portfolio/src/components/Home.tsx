import headerVideo from "../assets/header.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const headerLinkClasses =
  "text-violet-900 mr-4 hover:text-violet-950 hover:scale-110 transition-all duration-300";
const Header: () => JSX.Element = () => {
  return (
    <header className="py-40 flex justify-center items-center">
      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full p-4">
            <h1
              id="page-title"
              className="text-6xl font-bold mb-4 text-violet-950"
            >
              Milena S. Aron
            </h1>
            <p
              id="page-description"
              className="text-3xl font-bold text-violet-900"
            >
              Software Developer
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/aronmilenait"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className={headerLinkClasses}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/milenasaron/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className={headerLinkClasses}
                />
              </a>
              <a
                href="mailto:aronmilena.it@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className={headerLinkClasses}
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-auto flex items-center align-middle">
            <video
              autoPlay
              loop
              muted
              id="header-video"
              className="w-auto sm:w-2/4 h-auto"
            >
              <source src={headerVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
