import { Link as ScrollLink } from 'react-scroll';

const navbarLinkClasses = "text-violet-50 hover:text-violet-100 transition-colors duration-300 font-bold cursor-pointer text-lg";
const navbarLinkContainerClasses = "px-4";
const scrollOptions = {
  duration: 800,
  smooth: 'easeInOutQuart', 
};

const Navbar: () => JSX.Element = () => {
  return (
    <nav className="flex justify-center bg-violet-950">
      <div className="flex space-x-4 py-4">
        <div className={navbarLinkContainerClasses}>
          <ScrollLink
            to="home"
            className={navbarLinkClasses}
            {...scrollOptions}
          >
            Home
          </ScrollLink>
        </div>
        <div className={navbarLinkContainerClasses}>
          <ScrollLink
            to="experience"
            className={navbarLinkClasses}
            {...scrollOptions}
          >
            Experience
          </ScrollLink>
        </div>
        <div className={navbarLinkContainerClasses}>
          <ScrollLink
            to="skills"
            className={navbarLinkClasses}
            {...scrollOptions}
          >
            Skills
          </ScrollLink>
        </div>
        <div className={navbarLinkContainerClasses}>
          <ScrollLink
            to="projects"
            className={navbarLinkClasses}
            {...scrollOptions}
          >
            Projects
          </ScrollLink>
        </div>
        <div className={navbarLinkContainerClasses}>
          <ScrollLink
            to="about-me"
            className={navbarLinkClasses}
            {...scrollOptions}
          >
            About Me
          </ScrollLink>
        </div>
        <div className={navbarLinkContainerClasses}>
          <ScrollLink
            to="contact"
            className={navbarLinkClasses}
            {...scrollOptions}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;