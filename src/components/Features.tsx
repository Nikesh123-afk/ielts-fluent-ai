import { Button } from "./ui/button";
import { Brain, Mic, BarChart3, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Assessment",
      description: "Get instant, accurate band scores using advanced AI that understands IELTS criteria",
      color: "primary"
    },
    {
      icon: Mic,
      title: "Voice Recognition",
      description: "Practice with real-time transcription and pronunciation feedback",
      color: "success"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Visualize your improvement with detailed analytics and personalized insights",
      color: "warning"
    },
    {
      icon: Users,
      title: "Peer Feedback",
      description: "Connect with other learners for authentic practice and community support",
      color: "primary"
    },
    {
      icon: Award,
      title: "Gamified Learning",
      description: "Earn badges, climb leaderboards, and stay motivated with achievement systems",
      color: "success"
    },
    {
      icon: Clock,
      title: "Flexible Practice",
      description: "Practice anytime, anywhere with our responsive web platform",
      color: "warning"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Ace IELTS Speaking
          </h2>
          <p className="text-xl text-muted-foreground">
            Our comprehensive platform combines AI technology with proven learning methods 
            to give you the competitive edge you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-smooth border"
            >
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  feature.color === 'primary' ? 'bg-primary/10' :
                  feature.color === 'success' ? 'bg-success/10' :
                  'bg-warning/10'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.color === 'primary' ? 'text-primary' :
                    feature.color === 'success' ? 'text-success' :
                    'text-warning'
                  }`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/auth">
            <Button variant="hero" size="lg">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;