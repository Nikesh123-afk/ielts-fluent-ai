import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import maleAvatar from "@/assets/avatar-male-examiner.jpg";
import femaleAvatar from "@/assets/avatar-female-examiner.jpg";

export interface Avatar {
  id: string;
  name: string;
  gender: 'male' | 'female';
  image: string;
  description: string;
}

const avatars: Avatar[] = [
  {
    id: 'john',
    name: 'Dr. John Mitchell',
    gender: 'male',
    image: maleAvatar,
    description: 'Experienced IELTS examiner with 10+ years of teaching'
  },
  {
    id: 'sarah',
    name: 'Dr. Sarah Chen',
    gender: 'female',
    image: femaleAvatar,
    description: 'Certified IELTS trainer specializing in speaking skills'
  }
];

interface AvatarSelectorProps {
  selectedAvatar: Avatar;
  onAvatarChange: (avatar: Avatar) => void;
}

const AvatarSelector = ({ selectedAvatar, onAvatarChange }: AvatarSelectorProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Choose Your AI Examiner</h3>
      <div className="grid grid-cols-2 gap-4">
        {avatars.map((avatar) => (
          <Card 
            key={avatar.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-hover ${
              selectedAvatar.id === avatar.id 
                ? 'ring-2 ring-primary bg-primary/5' 
                : 'hover:bg-accent/50'
            }`}
            onClick={() => onAvatarChange(avatar)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                <img 
                  src={avatar.image} 
                  alt={avatar.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-foreground">{avatar.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">
                {avatar.description}
              </p>
              {selectedAvatar.id === avatar.id && (
                <div className="mt-2 px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                  Selected
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { AvatarSelector, avatars };
export default AvatarSelector;