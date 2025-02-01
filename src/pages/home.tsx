import { useState } from "react";
import { Coffee, Heart, Star, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/hero-section";
import { RecommendationForm } from "@/components/recommendation-form";
import { CoffeeCard } from "@/components/coffee-card";
import { FeatureCard } from "@/components/feature-card";
import { Typography } from "@/components/ui/typography";

// Mock data for coffee recommendations
const COFFEE_RECOMMENDATIONS = [
  {
    id: 1,
    title: "Ethiopian Yirgacheffe",
    description: "Light roasted, floral and citrusy notes with a clean finish",
    strength: 3,
  },
  {
    id: 2,
    title: "Colombian Supremo",
    description: "Medium roasted, balanced with caramel sweetness",
    strength: 4,
  },
  {
    id: 3,
    title: "Sumatra Mandheling",
    description: "Dark roasted, full-bodied with earthy and spicy notes",
    strength: 5,
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<typeof COFFEE_RECOMMENDATIONS>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleGetStarted = () => {
    const recommendationSection = document.getElementById("recommendation-form");
    recommendationSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (preferences: {
    roastLevel: string;
    flavorProfile: string;
    brewMethod: string;
  }) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setRecommendations(COFFEE_RECOMMENDATIONS);
    setShowRecommendations(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            <Typography.H3>CoffeeAI</Typography.H3>
          </div>
          <ModeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onGetStarted={handleGetStarted} />

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Typography.H2 className="mb-12 text-center">
            Why Choose Our AI Coffee Recommender?
          </Typography.H2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Analysis"
              description="Our advanced AI analyzes your preferences to find your perfect coffee match"
            />
            <FeatureCard
              icon={ThumbsUp}
              title="Personalized Results"
              description="Get recommendations tailored to your unique taste preferences"
            />
            <FeatureCard
              icon={Heart}
              title="Coffee Expertise"
              description="Backed by coffee experts and real taste data"
            />
          </div>
        </div>
      </section>

      {/* Recommendation Form Section */}
      <section
        id="recommendation-form"
        className="bg-secondary/30 py-20"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Typography.H2 className="mb-4">
              Find Your Perfect Coffee Match
            </Typography.H2>
            <Typography.Lead className="mb-8">
              Tell us about your preferences, and our AI will recommend the perfect
              coffee blends for you.
            </Typography.Lead>
          </div>
          <div className="mx-auto max-w-md">
            <RecommendationForm
              onSubmit={handleFormSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      {showRecommendations && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20"
        >
          <div className="mx-auto max-w-7xl px-4">
            <Typography.H2 className="mb-12 text-center">
              Your Personalized Coffee Recommendations
            </Typography.H2>
            <div className="grid gap-8 md:grid-cols-3">
              {recommendations.map((coffee) => (
                <CoffeeCard
                  key={coffee.id}
                  title={coffee.title}
                  description={coffee.description}
                  strength={coffee.strength}
                  onSelect={() => {
                    // Handle selection
                  }}
                />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Typography.Small className="text-muted-foreground">
            © 2024 CoffeeAI. All rights reserved.
          </Typography.Small>
        </div>
      </footer>
    </div>
  );
}