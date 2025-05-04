
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type MaterialHeaderProps = {
  semesterNumber: number;
  toggleAdminLinks: () => void;
};

const MaterialHeader = ({ semesterNumber, toggleAdminLinks }: MaterialHeaderProps) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/study-material">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Study Material
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Semester {semesterNumber} Resources</h1>
      </div>
      
      {/* Admin button - double click to reveal upload links */}
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-gray-400 hover:text-gray-600"
        onDoubleClick={toggleAdminLinks}
      >
        Admin
      </Button>
    </div>
  );
};

export default MaterialHeader;
