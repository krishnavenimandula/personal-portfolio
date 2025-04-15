import SectionHeading from "../components/SectionHeading";
import { education } from "../data/education";
const Education = () => {
  return (
    <section
      id="education"
      className="section bg-portfolio-black text-white pt-5 pb-5"
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Education &" highlight="Certifications" />

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item) => (
              <div className="bg-card rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="text-primary mb-2">{item.period}</div>
                <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                <p className="text-muted-foreground mb-4">{item.institution}</p>
                {item.credentialId && (
                  <p className="text-xs text-muted-foreground/70">
                    Credential ID: {item.credentialId}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
