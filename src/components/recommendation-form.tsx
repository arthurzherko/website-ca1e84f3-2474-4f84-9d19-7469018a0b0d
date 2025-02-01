import { useState } from "react";
import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";

interface RecommendationFormProps {
  onSubmit: (preferences: {
    roastLevel: string;
    flavorProfile: string;
    brewMethod: string;
  }) => void;
  isLoading?: boolean;
}

export function RecommendationForm({
  onSubmit,
  isLoading = false,
}: RecommendationFormProps) {
  const [preferences, setPreferences] = useState({
    roastLevel: "",
    flavorProfile: "",
    brewMethod: "",
  });

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-primary" />
          <span>Coffee Preferences</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Typography.Small>Roast Level</Typography.Small>
          <Select
            value={preferences.roastLevel}
            onValueChange={(value) =>
              setPreferences({ ...preferences, roastLevel: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select roast level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light Roast</SelectItem>
              <SelectItem value="medium">Medium Roast</SelectItem>
              <SelectItem value="dark">Dark Roast</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Typography.Small>Flavor Profile</Typography.Small>
          <Select
            value={preferences.flavorProfile}
            onValueChange={(value) =>
              setPreferences({ ...preferences, flavorProfile: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select flavor profile" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fruity">Fruity</SelectItem>
              <SelectItem value="nutty">Nutty</SelectItem>
              <SelectItem value="chocolate">Chocolate</SelectItem>
              <SelectItem value="floral">Floral</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Typography.Small>Brew Method</Typography.Small>
          <Select
            value={preferences.brewMethod}
            onValueChange={(value) =>
              setPreferences({ ...preferences, brewMethod: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select brew method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="espresso">Espresso</SelectItem>
              <SelectItem value="drip">Drip Coffee</SelectItem>
              <SelectItem value="french">French Press</SelectItem>
              <SelectItem value="pour">Pour Over</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full"
          onClick={() => onSubmit(preferences)}
          disabled={isLoading}
        >
          {isLoading ? "Getting Recommendations..." : "Get Recommendations"}
        </Button>
      </CardContent>
    </Card>
  );
}