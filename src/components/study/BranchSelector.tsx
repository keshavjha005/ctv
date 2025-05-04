
import { Button } from "@/components/ui/button";

type Branch = {
  id: string;
  name: string;
};

type BranchSelectorProps = {
  branches: Branch[];
  selectedBranch: string;
  setSelectedBranch: (branch: string) => void;
};

const BranchSelector = ({ branches, selectedBranch, setSelectedBranch }: BranchSelectorProps) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="inline-flex min-w-full space-x-1 rounded-lg bg-white p-1 shadow-sm">
        {branches.map(branch => (
          <Button
            key={branch.id}
            variant={selectedBranch === branch.id ? "default" : "ghost"}
            className={selectedBranch === branch.id ? "bg-club-primary text-white" : ""}
            onClick={() => setSelectedBranch(branch.id)}
          >
            {branch.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BranchSelector;
