import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface SendRequestButtonProps {
  serviceName: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link";
  children?: React.ReactNode;
}

const SendRequestButton = ({ 
  serviceName,
  className = "w-full mt-4",
  variant = "default",
  children = "Send Request"
}: SendRequestButtonProps) => {
  const handleSendRequest = () => {
    // Always open the provided Google Form URL
    const googleFormUrl = 'https://forms.gle/rh7pCaqQSELtPwJz6';
    window.open(googleFormUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleSendRequest}
      className={className}
      variant={variant}
      style={{ backgroundColor: '#C5BAFF', borderColor: '#C5BAFF', color: '#000' }}
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      {children}
    </Button>
  );
};

export default SendRequestButton;
