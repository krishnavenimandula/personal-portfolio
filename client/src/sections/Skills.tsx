import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section py-20 bg-muted/30 bg-portfolio-black text-white"
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="My" highlight="Skills" />
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I've worked with a variety of technologies in the web development
          world. Here are some of the key skills I bring to every project.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
