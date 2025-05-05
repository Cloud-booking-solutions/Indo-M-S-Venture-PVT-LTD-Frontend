
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-spice-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-spice-900 mb-8">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-spice-600 hover:bg-spice-700">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
