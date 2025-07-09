import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="text-6xl font-bold text-primary mb-4">404</div>
            <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          </div>
          
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We couldn't find the page you're looking for. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="/" className="flex items-center gap-2">
                <Home size={16} />
                Go Home
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
