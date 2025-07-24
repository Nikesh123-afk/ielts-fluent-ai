import { Mic, BookOpen, Users, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">IELTS Fluent AI</span>
            </div>
            <p className="text-background/70">
              Transform your IELTS speaking skills with AI-powered practice and personalized feedback.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#practice" className="hover:text-background transition-smooth">Practice Sessions</a></li>
              <li><a href="#progress" className="hover:text-background transition-smooth">Progress Tracking</a></li>
              <li><a href="#community" className="hover:text-background transition-smooth">Community</a></li>
              <li><a href="#pricing" className="hover:text-background transition-smooth">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#guide" className="hover:text-background transition-smooth">IELTS Guide</a></li>
              <li><a href="#tips" className="hover:text-background transition-smooth">Speaking Tips</a></li>
              <li><a href="#blog" className="hover:text-background transition-smooth">Blog</a></li>
              <li><a href="#help" className="hover:text-background transition-smooth">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#about" className="hover:text-background transition-smooth">About Us</a></li>
              <li><a href="#contact" className="hover:text-background transition-smooth">Contact</a></li>
              <li><a href="#privacy" className="hover:text-background transition-smooth">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-background transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; 2024 IELTS Fluent AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;