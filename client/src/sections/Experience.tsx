import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section section-alt bg-portfolio-black text-white"
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Work" highlight="Experience" />

        <div className="">
          {experience.map((job, index) => (
            <div className="relative group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary transition-colors">
                <div className="font-medium text-xl">{job.title}</div>
                <div className="sm:ml-auto text-sm text-muted-foreground">
                  {job.period}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start mb-5">
                <div className="text-primary font-medium">{job.company}</div>
                <div className="sm:ml-auto text-sm text-muted-foreground">
                  {job.location}
                </div>
              </div>

              <div className="text-muted-foreground space-y-2 text-secondary-gray">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                    <li>{responsibility}</li>
                  </div>
                ))}
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 sm:left-0 sm:top-7 sm:mt-0.5 h-full sm:h-auto w-0.5 bg-primary/30">
                <div className="w-4 h-4 rounded-full bg-primary absolute -left-1.5 sm:top-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
