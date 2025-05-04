
import { Card, CardContent } from "@/components/ui/card";
import MaterialItem from "./MaterialItem";

type MaterialData = {
  id: number;
  title: string;
  fileSize: string;
  pages: number;
  year?: string;
  author?: string;
};

type MaterialsTabProps = {
  title: string;
  branchName: string;
  materialType: "question-paper" | "note";
  materials: MaterialData[];
  onDownload: (fileType: string, fileName: string) => void;
};

const MaterialsTab = ({ title, branchName, materialType, materials, onDownload }: MaterialsTabProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-6 text-xl font-bold text-gray-900">{title} - {branchName}</h3>
        
        {materials.length > 0 ? (
          <div className="space-y-4">
            {materials.map(material => (
              <MaterialItem 
                key={material.id} 
                {...material} 
                type={materialType} 
                onDownload={onDownload}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-500">No {materialType === "question-paper" ? "question papers" : "notes"} available for this branch</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MaterialsTab;
