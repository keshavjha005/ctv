
import { Button } from "@/components/ui/button";
import { FileIcon, Download } from "lucide-react";

type MaterialItemProps = {
  id: number;
  title: string;
  fileSize: string;
  pages: number;
  year?: string;
  author?: string;
  type: "question-paper" | "note";
  onDownload: (fileType: string, fileName: string) => void;
};

const MaterialItem = ({ id, title, fileSize, pages, year, author, type, onDownload }: MaterialItemProps) => {
  const isQuestionPaper = type === "question-paper";
  const buttonColorClass = isQuestionPaper ? "text-club-primary hover:bg-club-primary/10 hover:text-club-primary" : "text-club-secondary hover:bg-club-secondary/10 hover:text-club-secondary";
  const iconColorClass = isQuestionPaper ? "bg-club-primary/10 text-club-primary" : "bg-club-secondary/10 text-club-secondary";
  
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50">
      <div className="flex items-center">
        <div className={`mr-4 flex h-12 w-12 items-center justify-center rounded-full ${iconColorClass}`}>
          <FileIcon className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500">
            {isQuestionPaper 
              ? `${year} • ${pages} pages • ${fileSize}`
              : `By ${author} • ${pages} pages • ${fileSize}`
            }
          </p>
        </div>
      </div>
      <Button 
        variant="outline"
        className={`flex items-center ${buttonColorClass}`}
        onClick={() => onDownload(isQuestionPaper ? "Question Paper" : "Note", title)}
      >
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default MaterialItem;
