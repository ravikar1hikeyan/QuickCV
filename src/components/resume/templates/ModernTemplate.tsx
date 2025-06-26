
import { useResume } from "@/contexts/ResumeContext";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Award, Briefcase, BookOpen, Code } from "lucide-react";

const ModernTemplate = () => {
  const { resumeData, resumeSettings } = useResume();
  const { personal, objective, education, skills, experience, projects, certifications, achievements } = resumeData;

  return (
    <div className="p-8 w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <div className="resume-section-spacing flex items-start gap-6">
        {/* Profile Image */}
        {personal.profileImage && (
          <div className="flex-shrink-0">
            <img
              src={personal.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-resume-primary shadow-lg"
            />
          </div>
        )}
        
        {/* Header Info */}
        <div className="flex-1">
          <h1 className="resume-title-responsive font-bold mb-1 text-resume-primary">{personal.name || "Your Name"}</h1>
          
          <div className="space-y-1">
            {objective && <p className="text-gray-600 dark:text-gray-300 mb-3 resume-text-responsive">{objective}</p>}
            
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 dark:text-gray-300">
              {personal.email && (
                <div className="flex items-center gap-1 resume-text-responsive">
                  <Mail className="h-3.5 w-3.5 text-resume-primary" />
                  <span>{personal.email}</span>
                </div>
              )}
              
              {personal.phone && (
                <div className="flex items-center gap-1 resume-text-responsive">
                  <Phone className="h-3.5 w-3.5 text-resume-primary" />
                  <span>{personal.phone}</span>
                </div>
              )}
              
              {personal.location && (
                <div className="flex items-center gap-1 resume-text-responsive">
                  <MapPin className="h-3.5 w-3.5 text-resume-primary" />
                  <span>{personal.location}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 dark:text-gray-300">
              {personal.website && (
                <div className="flex items-center gap-1 resume-text-responsive">
                  <Globe className="h-3.5 w-3.5 text-resume-primary" />
                  <a href={personal.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{personal.website.replace(/^https?:\/\//, '')}</a>
                </div>
              )}
              
              {personal.github && (
                <div className="flex items-center gap-1 resume-text-responsive">
                  <Github className="h-3.5 w-3.5 text-resume-primary" />
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">{personal.github.replace(/^https?:\/\//, '')}</a>
                </div>
              )}
              
              {personal.linkedin && (
                <div className="flex items-center gap-1 resume-text-responsive">
                  <Linkedin className="h-3.5 w-3.5 text-resume-primary" />
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">{personal.linkedin.replace(/^https?:\/\//, '')}</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col space-y-5 flex-grow">
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="resume-heading-responsive font-bold border-b border-resume-primary pb-1 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-resume-primary" />
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium resume-text-responsive">{edu.degree}</h3>
                      <p className="resume-text-responsive">{edu.institution}, {edu.location}</p>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 resume-text-responsive">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>
                  {edu.grade && <p className="resume-text-responsive mt-1">Grade: {edu.grade}</p>}
                  {edu.description && <p className="resume-text-responsive mt-1 text-gray-600 dark:text-gray-300">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="resume-heading-responsive font-bold border-b border-resume-primary pb-1 mb-2 flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-resume-primary" />
              Experience
            </h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium resume-text-responsive">{exp.title}</h3>
                        {exp.isInternship && (
                          <span className="resume-text-responsive px-1.5 py-0.5 bg-resume-primary/10 text-resume-primary rounded">
                            Internship
                          </span>
                        )}
                      </div>
                      <p className="resume-text-responsive">{exp.company}, {exp.location}</p>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 resume-text-responsive">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>
                  <p className="resume-text-responsive mt-1 text-gray-600 dark:text-gray-300">{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside resume-text-responsive mt-1 pl-1 space-y-0.5">
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
        
        {/* Skills */}
        {skills.some(category => category.skills.length > 0) && (
          <section>
            <h2 className="resume-heading-responsive font-bold border-b border-resume-primary pb-1 mb-2 flex items-center gap-2">
              <Code className="h-4 w-4 text-resume-primary" />
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              {skills.filter(category => category.skills.length > 0).map((category, index) => (
                <div key={index}>
                  <h3 className="resume-text-responsive font-medium">{category.category}</h3>
                  <p className="resume-text-responsive text-gray-600 dark:text-gray-300">
                    {category.skills.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="resume-heading-responsive font-bold border-b border-resume-primary pb-1 mb-2 flex items-center gap-2">
              <Code className="h-4 w-4 text-resume-primary" />
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium resume-text-responsive">
                        {project.title}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-resume-primary hover:underline">
                            View Project
                          </a>
                        )}
                      </h3>
                      <p className="resume-text-responsive">
                        <span className="text-gray-600 dark:text-gray-400">
                          Technologies: {project.technologies.join(", ")}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 resume-text-responsive">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>
                        {project.startDate} - {project.endDate}
                      </span>
                    </div>
                  </div>
                  <p className="resume-text-responsive mt-1 text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Certifications & Achievements in a 2-column layout if both exist */}
        {(certifications.length > 0 || achievements.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Certifications */}
            {certifications.length > 0 && (
              <section>
                <h2 className="resume-heading-responsive font-bold border-b border-resume-primary pb-1 mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-resume-primary" />
                  Certifications
                </h2>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <div className="flex justify-between items-start">
                        <h3 className="resume-text-responsive font-medium">
                          {cert.title}
                          {cert.link && (
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-resume-primary hover:underline">
                              Verify
                            </a>
                          )}
                        </h3>
                        <span className="resume-text-responsive text-gray-600 dark:text-gray-400">{cert.date}</span>
                      </div>
                      <p className="resume-text-responsive">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* Achievements */}
            {achievements.length > 0 && (
              <section>
                <h2 className="resume-heading-responsive font-bold border-b border-resume-primary pb-1 mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-resume-primary" />
                  Achievements
                </h2>
                <div className="space-y-2">
                  {achievements.map((achievement) => (
                    <div key={achievement.id}>
                      <div className="flex justify-between items-start">
                        <h3 className="resume-text-responsive font-medium">{achievement.title}</h3>
                        <span className="resume-text-responsive text-gray-600 dark:text-gray-400">{achievement.date}</span>
                      </div>
                      <p className="resume-text-responsive text-gray-600 dark:text-gray-300">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
