
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileToggleButton from "@/components/layout/MobileToggleButton";
import DesktopLayout from "@/components/layout/DesktopLayout";
import MobileLayout from "@/components/layout/MobileLayout";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [showPreview, setShowPreview] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="h-16"></div>
      
      <main className="flex-1">
        {/* Desktop: Vertical layout */}
        {!isMobile && <DesktopLayout />}

        {/* Mobile: Toggle layout */}
        {isMobile && <MobileLayout showPreview={showPreview} />}
      </main>
      
      <Footer />
      
      {/* Mobile Toggle Button */}
      {isMobile && (
        <MobileToggleButton 
          showPreview={showPreview} 
          onToggle={() => setShowPreview(!showPreview)} 
        />
      )}
    </div>
  );
};

export default Index;
