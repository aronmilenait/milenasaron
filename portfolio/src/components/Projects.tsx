import { projectsData } from '../data/projectsData';

const Projects: () => JSX.Element = () => {
  return (
    <section id="projects" className="bg-violet-950 py-40">
      <div className="container mx-auto">
        <h4 className="text-4xl font-bold mb-8 text-violet-50 text-center">Projects</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <p className="text-violet-950 text-xl font-bold mb-4 text-center">{project.title}</p>
              <p className="text-violet-950 mb-4">{project.description}</p>
              <img src={project.src} alt={project.title} className="mb-4" />
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 px-2 py-1 bg-violet-500 text-white rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block px-4 py-3 bg-violet-950 text-white font-bold text-center rounded transition duration-300 ease-in-out transform hover:bg-violet-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;