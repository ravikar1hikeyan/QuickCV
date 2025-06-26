import { useResume } from "@/contexts/ResumeContext";

const ClassicTemplate = () => {
  const { resumeData } = useResume();
  const { personal, objective, education, skills, experience, projects, certifications, achievements } = resumeData;

  return (
    <div className="p-8 w-full h-full flex flex-col bg-white dark:bg-resume-dark overflow-hidden">
      {/* Header */}
      <div className="text-center resume-section-spacing pb-4 border-b-2 border-gray-300 dark:border-gray-600">
        <h1 className="resume-title-responsive font-bold mb-1">{personal.name || "Your Name"}</h1>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-gray-700 dark:text-gray-300 resume-text-responsive">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-gray-700 dark:text-gray-300 resume-text-responsive">
          {personal.website && (
            <a href={personal.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {personal.website.replace(/^https?:\/\//, '')}
            </a>
          )}
          
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          )}
          
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          )}
        </div>
      </div>
      
      {/* Objective */}
      {objective && (
        <section className="resume-section-spacing">
          <h2 className="resume-heading-responsive font-bold uppercase tracking-wider mb-2">Professional Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 resume-text-responsive">{objective}</p>
        </section>
      )}
      
      {/* Education */}
      {education.length > 0 && (
        <section className="resume-section-spacing">
          <h2 className="resume-heading-responsive font-bold uppercase tracking-wider mb-2">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold resume-text-responsive">{edu.degree}</h3>
                  <span className="text-gray-600 dark:text-gray-400 resume-text-responsive">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="resume-text-responsive">{edu.institution}, {edu.location}</p>
                {edu.grade && <p className="resume-text-responsive">Grade: {edu.grade}</p>}
                {edu.description && <p className="text-gray-600 dark:text-gray-300 resume-text-responsive">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="resume-section-spacing">
          <h2 className="resume-heading-responsive font-bold uppercase tracking-wider mb-2">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold resume-text-responsive">
                    {exp.title}
                    {exp.isInternship && (
                      <span className="ml-2 font-normal italic">(Internship)</span>
                    )}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 resume-text-responsive">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="italic resume-text-responsive">{exp.company}, {exp.location}</p>
                <p className="mt-1 text-gray-700 dark:text-gray-300 resume-text-responsive">{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside mt-1 space-y-1 pl-4 resume-text-responsive">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Projects */}
      {projects.length > 0 && (
        <section className="resume-section-spacing">
          <h2 className="resume-heading-responsive font-bold uppercase tracking-wider mb-2">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold resume-text-responsive">
                    {project.title}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 dark:text-blue-400 hover:underline">
                        (View)
                      </a>
                    )}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 resume-text-responsive">
                    {project.startDate} - {project.endDate}
                  </span>
                </div>
                <p className="italic resume-text-responsive">Technologies: {project.technologies.join(", ")}</p>
                <p className="mt-1 text-gray-700 dark:text-gray-300 resume-text-responsive">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Skills */}
      {skills.some(category => category.skills.length > 0) && (
        <section className="resume-section-spacing">
          <h2 className="resume-heading-responsive font-bold uppercase tracking-wider mb-2">Skills</h2>
          <div className="space-y-2">
            {skills.filter(category => category.skills.length > 0).map((category, index) => (
              <div key={index}>
                <h3 className="font-bold resume-text-responsive">{category.category}</h3>
                <p className="text-gray-700 dark:text-gray-300 resume-text-responsive">
                  {category.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="resume-section-spacing">
          <h2 className="resume-heading-responsive font-bold uppercase tracking-wider mb-2">Certifications</h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
                <div>
                  <span className="font-bold resume-text-responsive">{cert.title}</span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 dark:text-blue-400 hover:underline resume-text-responsive">
                      (Verify)
                    </a>
                  )}
                  <span className="ml-2 resume-text-responsive">- {cert.issuer}</span>
                </div>
                <span className="text-gray-600 dark:text-gray-400 resume-text-responsive">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="resume-section-spacing">
          <h2 className="resume-heading-responsive font-bold uppercase tracking-wider mb-2">Achievements</h2>
          <div className="space-y-2">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex justify-between">
                <div>
                  <span className="font-bold resume-text-responsive">{achievement.title}</span>
                  <p className="text-gray-700 dark:text-gray-300 resume-text-responsive">{achievement.description}</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap resume-text-responsive">{achievement.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
