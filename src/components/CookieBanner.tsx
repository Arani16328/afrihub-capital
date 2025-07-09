import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    const cookieTimestamp = localStorage.getItem('cookieTimestamp');
    
    if (cookieChoice && cookieTimestamp) {
      const oneMonth = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
      const isExpired = Date.now() - parseInt(cookieTimestamp) > oneMonth;
      
      if (isExpired) {
        // Clear expired cookie choice
        localStorage.removeItem('cookieChoice');
        localStorage.removeItem('cookieTimestamp');
        setIsVisible(true);
      }
    } else {
      // No choice made yet, show banner
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieChoice', 'accepted');
    localStorage.setItem('cookieTimestamp', Date.now().toString());
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('cookieChoice', 'rejected');
    localStorage.setItem('cookieTimestamp', Date.now().toString());
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Cookie className="h-6 w-6 text-accent" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-foreground mb-2">
                We use cookies to enhance your experience
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                We use essential cookies to make our site work and analytical cookies to understand how you interact with our website. 
                By clicking "Accept All", you consent to the use of all cookies. You can also choose to reject non-essential cookies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleAcceptAll}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Accept All
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleRejectNonEssential}
                  className="border-border hover:bg-accent/10"
                >
                  Reject Non-Essential
                </Button>
              </div>
            </div>
            
            <button
              onClick={handleClose}
              className="flex-shrink-0 p-1 hover:bg-accent/10 rounded-md transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;