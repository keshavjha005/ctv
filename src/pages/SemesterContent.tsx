
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MaterialHeader from "@/components/study/MaterialHeader";
import AdminUploadLinks from "@/components/study/AdminUploadLinks";
import BranchSelector from "@/components/study/BranchSelector";
import MaterialsTab from "@/components/study/MaterialsTab";
import UploadCTA from "@/components/study/UploadCTA";
import { branches, uploadUrls, questionPapers, notes } from "@/data/studyMaterialData";

const SemesterContent = () => {
  const { semester } = useParams<{ semester: string }>();
  const [selectedBranch, setSelectedBranch] = useState("cse");
  const [showAdminLinks, setShowAdminLinks] = useState(false);
  
  if (!semester) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg text-gray-600">Semester not specified</p>
      </div>
    );
  }

  const semesterNumber = parseInt(semester);
  
  // Helper function to handle file download
  const handleDownload = (fileType: string, fileName: string) => {
    // In a real app, this would trigger the actual file download
    // For now, we'll just show a toast message
    alert(`Downloading ${fileType}: ${fileName}`);
  };

  // Toggle admin links visibility
  const toggleAdminLinks = () => {
    setShowAdminLinks(!showAdminLinks);
  };

  // Get the current branch name
  const selectedBranchName = branches.find(b => b.id === selectedBranch)?.name || "";

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <MaterialHeader 
          semesterNumber={semesterNumber}
          toggleAdminLinks={toggleAdminLinks}
        />
        
        {/* Admin Upload Links (hidden by default) */}
        <AdminUploadLinks 
          showAdminLinks={showAdminLinks}
          uploadUrls={uploadUrls}
        />

        {/* Branch Selection */}
        <BranchSelector
          branches={branches}
          selectedBranch={selectedBranch}
          setSelectedBranch={setSelectedBranch}
        />

        {/* Content Tabs */}
        <Tabs defaultValue="question-papers">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="question-papers">Question Papers</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          
          {/* Question Papers Content */}
          <TabsContent value="question-papers">
            <MaterialsTab
              title="Question Papers"
              branchName={selectedBranchName}
              materialType="question-paper"
              materials={questionPapers[selectedBranch as keyof typeof questionPapers]}
              onDownload={handleDownload}
            />
          </TabsContent>
          
          {/* Notes Content */}
          <TabsContent value="notes">
            <MaterialsTab
              title="Notes"
              branchName={selectedBranchName}
              materialType="note"
              materials={notes[selectedBranch as keyof typeof notes]}
              onDownload={handleDownload}
            />
          </TabsContent>
        </Tabs>

        {/* Upload CTA Section */}
        <UploadCTA uploadUrls={uploadUrls} />
      </div>
    </div>
  );
};

export default SemesterContent;
