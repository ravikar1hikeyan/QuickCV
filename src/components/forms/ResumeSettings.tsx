
import { useResume } from "@/contexts/ResumeContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Eye, Type, FileText } from "lucide-react";

const ResumeSettings = () => {
  const { resumeSettings, updateSettings } = useResume();

  const templates = [
    { value: "modern", label: "Modern" },
    { value: "classic", label: "Classic" },
    { value: "creative", label: "Creative" },
  ];

  const colors = [
    { value: "#3b82f6", label: "Blue" },
    { value: "#ef4444", label: "Red" },
    { value: "#10b981", label: "Green" },
    { value: "#8b5cf6", label: "Purple" },
    { value: "#f59e0b", label: "Orange" },
    { value: "#6b7280", label: "Gray" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Resume Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Template Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium flex items-center gap-2">
            <FileText className="h-4 w-4" /> Template
          </Label>
          <Select
            value={resumeSettings.template}
            onValueChange={(value) => updateSettings({ template: value as any })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              {templates.map((template) => (
                <SelectItem key={template.value} value={template.value}>
                  {template.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Color Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Palette className="h-4 w-4" /> Primary Color
          </Label>
          <Select
            value={resumeSettings.primaryColor}
            onValueChange={(value) => updateSettings({ primaryColor: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color.value} value={color.value}>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: color.value }}
                    />
                    {color.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Text Scale */}
        <div className="space-y-3">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Type className="h-4 w-4" /> Text Scale: {resumeSettings.textScale || 1}x
          </Label>
          <Slider
            value={[resumeSettings.textScale || 1]}
            onValueChange={([value]) => updateSettings({ textScale: value })}
            min={0.8}
            max={1.2}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Display Options */}
        <div className="space-y-6">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Eye className="h-4 w-4" /> Display Options
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg border">
              <div>
                <Label htmlFor="show-contact-icons" className="text-sm font-medium">
                  Show Contact Icons
                </Label>
                <p className="text-xs text-gray-500 mt-1">
                  Display icons next to contact information
                </p>
              </div>
              <Switch
                id="show-contact-icons"
                checked={resumeSettings.showContactIcons}
                onCheckedChange={(checked) => 
                  updateSettings({ showContactIcons: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border">
              <div>
                <Label htmlFor="show-section-icons" className="text-sm font-medium">
                  Show Section Icons
                </Label>
                <p className="text-xs text-gray-500 mt-1">
                  Display icons next to section headings
                </p>
              </div>
              <Switch
                id="show-section-icons"
                checked={resumeSettings.showSectionIcons}
                onCheckedChange={(checked) => 
                  updateSettings({ showSectionIcons: checked })
                }
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeSettings;
