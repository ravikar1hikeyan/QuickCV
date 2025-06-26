
import FormTabs from "./FormTabs";
import ResumePreview from "@/components/resume/ResumePreview";

interface MobileLayoutProps {
  showPreview: boolean;
}

const MobileLayout = ({ showPreview }: MobileLayoutProps) => {
  return (
    <div className="w-full">
      {!showPreview ? (
        <div className="p-4">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Build Your Resume</h1>
          </div>
          
          <FormTabs isMobile={true} />
        </div>
      ) : (
        <div className="h-screen overflow-auto pt-16">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
          </div>
          <ResumePreview />
        </div>
      )}
    </div>
  );
};

export default MobileLayout;
