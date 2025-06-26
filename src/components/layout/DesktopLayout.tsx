
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import FormTabs from "./FormTabs";
import ResumePreview from "@/components/resume/ResumePreview";

const DesktopLayout = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Form Section at Top */}
      <div className="w-full border-b border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Build Your Resume</h1>
          </div>
          
          <FormTabs scrollAreaHeight="max-h-96" />
        </div>
      </div>
      
      {/* Preview Section Below */}
      <div className="w-full bg-gray-100 dark:bg-gray-900 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Live Preview</h2>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
        <div className="overflow-auto">
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
