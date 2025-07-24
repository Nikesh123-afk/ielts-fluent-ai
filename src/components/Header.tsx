import { Button } from "./ui/button";
import { Mic, BookOpen, Trophy, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <Mic className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">IELTS Fluent AI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#practice" className="text-muted-foreground hover:text-foreground transition-smooth">
            Practice
          </a>
          <a href="#progress" className="text-muted-foreground hover:text-foreground transition-smooth">
            Progress
          </a>
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-smooth">
            Community
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;