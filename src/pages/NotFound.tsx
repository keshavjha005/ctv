
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 py-12">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-9xl font-bold text-club-primary">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-6 text-lg text-gray-600">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <Button asChild className="bg-club-primary text-white hover:bg-club-secondary">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
