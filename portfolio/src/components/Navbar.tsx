import { Link } from 'react-router-dom';

const navbarLinkClasses = "text-lg font-bold text-violet-100 hover:text-violet-200 transition-all duration-300 mx-3";

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-center bg-violet-950">
            <div className="py-4">
                <Link to="/" className={navbarLinkClasses}>Home</Link>
                <Link to="/about" className={navbarLinkClasses}>Experience</Link>
                <Link to="/projects" className={navbarLinkClasses}>Projects</Link>
                <Link to="/about-me" className={navbarLinkClasses}>About Me</Link>
                <Link to="/contact" className={navbarLinkClasses}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
