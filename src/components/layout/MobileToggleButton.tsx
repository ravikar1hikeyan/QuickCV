
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileToggleButtonProps {
  showPreview: boolean;
  onToggle: () => void;
}

const MobileToggleButton = ({ showPreview, onToggle }: MobileToggleButtonProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-10">
      <Button 
        onClick={onToggle} 
        size="icon" 
        variant="default"
        className="rounded-full h-12 w-12 shadow-lg bg-primary hover:bg-primary/90"
      >
        {showPreview ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default MobileToggleButton;
