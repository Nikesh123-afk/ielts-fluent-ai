import { useState, useEffect } from "react";
import { Avatar } from "./AvatarSelector";

interface AvatarDisplayProps {
  avatar: Avatar;
  isAISpeaking: boolean;
  currentQuestion: string;
}

const AvatarDisplay = ({ avatar, isAISpeaking, currentQuestion }: AvatarDisplayProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAISpeaking) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isAISpeaking]);

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative mb-4">
        <div 
          className={`w-32 h-32 rounded-full overflow-hidden transition-all duration-300 ${
            isAnimating ? 'ring-4 ring-primary/50 scale-105' : 'ring-2 ring-border'
          }`}
        >
          <img 
            src={avatar.image} 
            alt={avatar.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Speaking indicator */}
        {isAISpeaking && (
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      <div className="text-center max-w-md">
        <h3 className="text-xl font-semibold text-foreground mb-2">{avatar.name}</h3>
        <p className="text-muted-foreground mb-4">{avatar.description}</p>
        
        {/* Speech bubble */}
        <div className="relative bg-card border rounded-lg p-4 shadow-card">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card border-t border-l rotate-45"></div>
          <p className="text-foreground">
            {isAISpeaking ? (
              <span className="flex items-center gap-2">
                <span>Speaking...</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </span>
            ) : (
              currentQuestion || "Hello! I'm ready to help you practice your IELTS speaking skills."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarDisplay;