import { Coffee } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-secondary/30 px-4">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <Coffee className="h-16 w-16 text-primary" />
        </div>
        <Typography.H1 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Discover Your Perfect Coffee Match
        </Typography.H1>
        <Typography.Lead className="mb-8">
          Our AI-powered recommendation system analyzes your taste preferences to
          find the perfect coffee blend for you. Experience coffee like never
          before.
        </Typography.Lead>
        <Button
          size="lg"
          onClick={onGetStarted}
          className="animate-pulse hover:animate-none"
        >
          Get Started
        </Button>
      </div>
      <div className="absolute inset-0 bg-[url('/coffee-pattern.svg')] opacity-5" />
    </div>
  );
}