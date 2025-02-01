import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="relative overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <Icon className="mb-4 h-8 w-8 text-primary" />
        <Typography.H4 className="mb-2">{title}</Typography.H4>
        <Typography.P className="text-sm text-muted-foreground">
          {description}
        </Typography.P>
      </CardContent>
    </Card>
  );
}