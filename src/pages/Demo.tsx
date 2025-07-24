import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-primary hover:text-primary/80 transition-smooth">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Watch How It Works
            </h1>
            <p className="text-xl text-muted-foreground">
              See how our AI examiner helps you improve your IELTS speaking skills
            </p>
          </div>

          <div className="bg-card rounded-xl overflow-hidden shadow-card border mb-8">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Demo video coming soon</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-xl shadow-card border">
              <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Step 1: Record</h3>
              <p className="text-muted-foreground">
                Answer IELTS speaking questions using your microphone
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Step 2: Analyze</h3>
              <p className="text-muted-foreground">
                Our AI examiner evaluates your response in real-time
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-card border">
              <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Step 3: Improve</h3>
              <p className="text-muted-foreground">
                Get instant feedback and personalized improvement tips
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/practice">
              <Button variant="hero" size="lg">
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;