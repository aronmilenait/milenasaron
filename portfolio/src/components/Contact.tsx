import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact: () => JSX.Element = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center py-40 bg-violet-950"
    >
      <div className="text-center">
        <h6 className="text-4xl font-bold mb-8 text-violet-50">Contact</h6>
        <div className="flex justify-center items-center space-x-8">
          <div>
            <a
              href="https://github.com/aronmilenait"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-100 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-5xl" />
              <p className="text-xs mt-1">GitHub</p>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/milenasaron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-100 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
              <p className="text-xs mt-1">LinkedIn</p>
            </a>
          </div>

          <div>
            <a
              href="mailto:aronmilena.it@gmail.com"
              className="text-violet-300 hover:text-violet-100 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-5xl" />
              <p className="text-xs mt-1">Email</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
