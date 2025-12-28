import { GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "MGM's College of CS & IT, Nanded",
    duration: "2021 - 2025",
    grade: "CGPA: 7.38",
    icon: GraduationCap,
    description:
      "Specialized in Python programming, Data Science, AI/ML, and IoT development. Participated in various hackathons and competitions.",
  },
  {
    degree: "Grade XII (HSC)",
    institution: "Yashwant Mahavidyalaya, Nanded",
    duration: "2021",
    grade: "90.33%",
    icon: School,
    description: "HSC Board",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <AnimatedSection
                  key={item.degree}
                  animation="fade-right"
                  delay={index * 150}
                >
                  <div className="relative pl-20">
                    {/* Timeline Icon */}
                    <div className="absolute left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary-foreground" />
                    </div>

                    <Card className="glass border-border/50 hover-lift">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{item.degree}</h3>
                          <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                            {item.grade}
                          </span>
                        </div>
                        <p className="text-primary/80 font-medium mb-1">
                          {item.institution}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.duration}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
