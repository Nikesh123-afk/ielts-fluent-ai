import { Button } from "./ui/button";
import { Play, Mic, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ielts.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background to-accent/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Master IELTS Speaking with{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  AI Coach
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Practice with our AI examiner, get instant band score feedback, 
                and improve your speaking skills faster than ever before.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/practice">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Play className="mr-2" />
                  Start Practice Session
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Mic className="mr-2" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-success" />
                </div>
                <span>AI Band Scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <span>Community Feedback</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={heroImage} 
                alt="IELTS Speaking Practice" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating achievement cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-card border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Band Score: 7.5</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card border">
              <div className="text-sm">
                <div className="font-medium">Today's Progress</div>
                <div className="text-success">+2 sessions completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;