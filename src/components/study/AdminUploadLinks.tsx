
import { Upload } from "lucide-react";

type AdminUploadLinksProps = {
  showAdminLinks: boolean;
  uploadUrls: {
    questionPapers: string;
    notes: string;
  };
};

const AdminUploadLinks = ({ showAdminLinks, uploadUrls }: AdminUploadLinksProps) => {
  if (!showAdminLinks) return null;

  return (
    <div className="mb-6 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">Admin Upload Links</h3>
      <div className="space-y-2">
        <div className="flex items-center">
          <Upload className="mr-2 h-4 w-4 text-gray-500" />
          <span className="mr-2 text-sm text-gray-700">Upload Question Papers:</span>
          <a 
            href={uploadUrls.questionPapers} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            {uploadUrls.questionPapers}
          </a>
        </div>
        <div className="flex items-center">
          <Upload className="mr-2 h-4 w-4 text-gray-500" />
          <span className="mr-2 text-sm text-gray-700">Upload Notes:</span>
          <a 
            href={uploadUrls.notes} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            {uploadUrls.notes}
          </a>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        These links are for administrators only. Please use the appropriate form to upload materials for each category.
      </p>
    </div>
  );
};

export default AdminUploadLinks;
