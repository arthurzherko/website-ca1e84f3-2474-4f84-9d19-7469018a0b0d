import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface CoffeeCardProps {
  title: string;
  description: string;
  strength: number;
  onSelect?: () => void;
}

export function CoffeeCard({
  title,
  description,
  strength,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <Coffee className="h-5 w-5 text-primary" />
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Coffee
              key={i}
              className={`h-4 w-4 ${
                i < strength ? "text-primary" : "text-muted"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <Typography.P className="line-clamp-2 text-sm text-muted-foreground">
          {description}
        </Typography.P>
        <Button
          className="mt-4 w-full"
          onClick={onSelect}
          variant="secondary"
        >
          Select This Blend
        </Button>
      </CardContent>
    </Card>
  );
}