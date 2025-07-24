import { Button } from "@/components/ui/button";
import { Mic, Play, Square, RotateCcw, Volume2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AvatarSelector, { Avatar, avatars } from "@/components/AvatarSelector";
import AvatarDisplay from "@/components/AvatarDisplay";

const Practice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(avatars[0]);
  
  const questions = [
    "Tell me about yourself and your interests.",
    "Describe your hometown. What do you like about it?",
    "What kind of music do you enjoy listening to?",
    "Do you prefer reading books or watching movies? Why?"
  ];

  const handleRecording = () => {
    setIsRecording(!isRecording);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Simulate AI speaking the new question
      setIsAISpeaking(true);
      setTimeout(() => setIsAISpeaking(false), 3000);
    }
  };

  const simulateAIResponse = () => {
    setIsAISpeaking(true);
    setTimeout(() => setIsAISpeaking(false), 2000);
  };

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
            <h1 className="text-3xl font-bold text-foreground mb-2">
              IELTS Speaking Practice
            </h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Avatar Selector */}
          <AvatarSelector 
            selectedAvatar={selectedAvatar}
            onAvatarChange={setSelectedAvatar}
          />

          {/* AI Avatar Display */}
          <AvatarDisplay 
            avatar={selectedAvatar}
            isAISpeaking={isAISpeaking}
            currentQuestion={questions[currentQuestion]}
          />

          <div className="bg-card rounded-xl p-8 shadow-card border mb-8">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Current Question:
              </h2>
              <p className="text-lg text-muted-foreground">
                {questions[currentQuestion]}
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <Button
                variant={isRecording ? "destructive" : "hero"}
                size="lg"
                onClick={handleRecording}
                className="text-lg px-8 py-6"
              >
                {isRecording ? (
                  <>
                    <Square className="mr-2" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="mr-2" />
                    Start Recording
                  </>
                )}
              </Button>
            </div>

            {isRecording && (
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-destructive">
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  Recording in progress...
                </div>
              </div>
            )}

            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => setCurrentQuestion(0)}>
                <RotateCcw className="mr-2" />
                Restart
              </Button>
              <Button 
                variant="ghost" 
                onClick={simulateAIResponse}
                disabled={isAISpeaking}
              >
                <Volume2 className="mr-2" />
                Hear Question
              </Button>
              <Button 
                variant="success" 
                onClick={nextQuestion}
                disabled={currentQuestion >= questions.length - 1}
              >
                Next Question
                <Play className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">Instructions:</h3>
            <ul className="text-muted-foreground space-y-1">
              <li>• Choose your preferred AI examiner (male or female)</li>
              <li>• Click "Hear Question" to have the AI speak the question</li>
              <li>• Click "Start Recording" to begin your response</li>
              <li>• Speak clearly and naturally</li>
              <li>• Try to speak for 1-2 minutes per question</li>
              <li>• Click "Stop Recording" when finished</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Practice;