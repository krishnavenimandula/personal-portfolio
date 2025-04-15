import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section section-alt bg-portfolio-black text-white pt-5 pb-5"
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="My" highlight="Portfolio" />

        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div className="bg-background p-6 md:p-8 rounded-xl border hover:border-mint-green/80 transition-all mb-8 last:mb-0 border-mint-green/30">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <div className="aspect-video bg-card rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
                      <img src={project.imageUrl} alt="" />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-secondary-gray">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 font-medium">
                    {project.demoLink && (
                      <button className="flex items-center bg-mint-green text-black p-3">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </button>
                    )}

                    {project.repoLink && (
                      <button className="flex items-center text-primary border-primary hover:bg-primary/10 bg-mint-green text-black p-3">
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repo
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
