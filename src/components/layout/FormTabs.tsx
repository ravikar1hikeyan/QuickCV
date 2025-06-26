
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import ObjectiveForm from "@/components/forms/ObjectiveForm";
import EducationForm from "@/components/forms/EducationForm";
import SkillsForm from "@/components/forms/SkillsForm";
import ProjectsForm from "@/components/forms/ProjectsForm";
import CertificationsForm from "@/components/forms/CertificationsForm";
import ExperienceForm from "@/components/forms/ExperienceForm";
import ResumeSettings from "@/components/forms/ResumeSettings";
import { 
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Settings,
} from "lucide-react";

interface FormTabsProps {
  isMobile?: boolean;
  scrollAreaHeight?: string;
}

const FormTabs = ({ isMobile = false, scrollAreaHeight }: FormTabsProps) => {
  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabsList className={`grid grid-cols-7 mb-6 ${isMobile ? 'mb-8' : ''} w-full`}>
        <TabsTrigger value="personal" className={`flex items-center gap-1 ${isMobile ? '' : 'text-xs'}`}>
          <User className={`${isMobile ? 'h-4 w-4 md:mr-1' : 'h-3 w-3'}`} />
          <span className={isMobile ? 'hidden md:inline' : ''}>Personal</span>
        </TabsTrigger>
        <TabsTrigger value="education" className={`flex items-center gap-1 ${isMobile ? '' : 'text-xs'}`}>
          <GraduationCap className={`${isMobile ? 'h-4 w-4 md:mr-1' : 'h-3 w-3'}`} />
          <span className={isMobile ? 'hidden md:inline' : ''}>Education</span>
        </TabsTrigger>
        <TabsTrigger value="experience" className={`flex items-center gap-1 ${isMobile ? '' : 'text-xs'}`}>
          <Briefcase className={`${isMobile ? 'h-4 w-4 md:mr-1' : 'h-3 w-3'}`} />
          <span className={isMobile ? 'hidden md:inline' : ''}>Experience</span>
        </TabsTrigger>
        <TabsTrigger value="skills" className={`flex items-center gap-1 ${isMobile ? '' : 'text-xs'}`}>
          <Code className={`${isMobile ? 'h-4 w-4 md:mr-1' : 'h-3 w-3'}`} />
          <span className={isMobile ? 'hidden md:inline' : ''}>Skills</span>
        </TabsTrigger>
        <TabsTrigger value="projects" className={`flex items-center gap-1 ${isMobile ? '' : 'text-xs'}`}>
          <Briefcase className={`${isMobile ? 'h-4 w-4 md:mr-1' : 'h-3 w-3'}`} />
          <span className={isMobile ? 'hidden md:inline' : ''}>Projects</span>
        </TabsTrigger>
        <TabsTrigger value="certifications" className={`flex items-center gap-1 ${isMobile ? '' : 'text-xs'}`}>
          <Award className={`${isMobile ? 'h-4 w-4 md:mr-1' : 'h-3 w-3'}`} />
          <span className={isMobile ? 'hidden md:inline' : ''}>Certs</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className={`flex items-center gap-1 ${isMobile ? '' : 'text-xs'}`}>
          <Settings className={`${isMobile ? 'h-4 w-4 md:mr-1' : 'h-3 w-3'}`} />
          <span className={isMobile ? 'hidden md:inline' : ''}>Settings</span>
        </TabsTrigger>
      </TabsList>
      
      <div className={`${scrollAreaHeight ? 'max-h-96 overflow-auto' : 'space-y-6'}`}>
        <TabsContent value="personal" className="mt-0">
          <ScrollArea className={`h-full pr-4 ${isMobile ? 'h-[calc(70vh-6rem)] md:h-[calc(65vh-6rem)]' : ''}`}>
            <div className={isMobile ? 'pr-4 pb-4' : ''}>
              <PersonalInfoForm />
              <div className={isMobile ? '' : 'mt-6'}>
                <ObjectiveForm />
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="education" className="mt-0">
          <ScrollArea className={`h-full pr-4 ${isMobile ? 'h-[calc(70vh-6rem)] md:h-[calc(65vh-6rem)]' : ''}`}>
            <div className={isMobile ? 'pr-4 pb-4' : ''}>
              <EducationForm />
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="experience" className="mt-0">
          <ScrollArea className={`h-full pr-4 ${isMobile ? 'h-[calc(70vh-6rem)] md:h-[calc(65vh-6rem)]' : ''}`}>
            <div className={isMobile ? 'pr-4 pb-4' : ''}>
              <ExperienceForm />
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="skills" className="mt-0">
          <ScrollArea className={`h-full pr-4 ${isMobile ? 'h-[calc(70vh-6rem)] md:h-[calc(65vh-6rem)]' : ''}`}>
            <div className={isMobile ? 'pr-4 pb-4' : ''}>
              <SkillsForm />
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="projects" className="mt-0">
          <ScrollArea className={`h-full pr-4 ${isMobile ? 'h-[calc(70vh-6rem)] md:h-[calc(65vh-6rem)]' : ''}`}>
            <div className={isMobile ? 'pr-4 pb-4' : ''}>
              <ProjectsForm />
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="certifications" className="mt-0">
          <ScrollArea className={`h-full pr-4 ${isMobile ? 'h-[calc(70vh-6rem)] md:h-[calc(65vh-6rem)]' : ''}`}>
            <div className={isMobile ? 'pr-4 pb-4' : ''}>
              <CertificationsForm />
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-0">
          <ScrollArea className={`h-full pr-4 ${isMobile ? 'h-[calc(70vh-6rem)] md:h-[calc(65vh-6rem)]' : ''}`}>
            <div className={isMobile ? 'pr-4 pb-4' : ''}>
              <ResumeSettings />
            </div>
          </ScrollArea>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default FormTabs;
