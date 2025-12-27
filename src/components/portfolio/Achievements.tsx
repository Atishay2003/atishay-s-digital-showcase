import { Trophy, Medal, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

const achievements = [
  {
    title: "1st Place - MSINS",
    event: "Maharashtra State Innovation Society",
    year: "2024",
    level: "State",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
    description: "Recognized for innovative technology solution at state level competition.",
  },
  {
    title: "2nd Place - IoT Competition",
    event: "State-level IoT Innovation",
    year: "2023",
    level: "State",
    icon: Medal,
    color: "from-gray-300 to-gray-400",
    description: "Home Automation System project awarded for innovation and impact.",
  },
  {
    title: "Runner-up - Aavishkar",
    event: "District, University & State Level",
    year: "2024 & 2025",
    level: "Multi-level",
    icon: Award,
    color: "from-orange-400 to-red-500",
    description: "Yoga Mate AI project recognized at multiple levels of Aavishkar competition.",
  },
  {
    title: "1st Place - RSM Hackathon",
    event: "National Level Hackathon",
    year: "2024",
    level: "National",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
    description: "Won first place in national hackathon for innovative solution.",
  },
  {
    title: "1st Place - Tech Competition",
    event: "MGM College Nanded",
    year: "2024",
    level: "National",
    icon: Star,
    color: "from-purple-400 to-pink-500",
    description: "First place in national level technical competition.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Achievements</span> & Awards
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Recognition for innovation and excellence at state and national levels.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full hidden md:block" />

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection
                key={achievement.title}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={index * 150}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <Card
                    className={`glass border-border/50 hover-lift flex-1 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <achievement.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-semibold">{achievement.title}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              {achievement.level}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {achievement.event} • {achievement.year}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
