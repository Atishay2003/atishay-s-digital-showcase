import { Award, Zap, Users, Egg, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";

const projects = [
  {
    title: "Home Automation System",
    category: "IoT",
    description:
      "Smart home automation system using ESP32 for remote device control. Reduced energy consumption by 15% through intelligent automation.",
    techStack: ["Python", "ESP32", "IoT"],
    achievement: "🥉 3rd Place - State Competition (₹5,000 prize)",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Digital Virtual Board",
    category: "Collaboration",
    description:
      "Real-time collaborative whiteboard application designed for remote teams. Features include drawing tools, real-time sync, and session management.",
    techStack: ["Python", "WebSocket", "Canvas"],
    achievement: null,
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Yoga Mate",
    category: "AI/ML",
    description:
      "AI-based yoga pose correction system using computer vision. Built with an 8-node ANN model for accurate pose detection and real-time feedback.",
    techStack: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "HTML", "CSS", "Bootstrap"],
    achievement: "🏆 Runner-up - Aavishkar (District, University, State)",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Smart Hatching System",
    category: "IoT",
    description:
      "Automated egg incubator system capable of handling 3,500 eggs. Features temperature and humidity control with mist maker and rotating motor.",
    techStack: ["Python", "Mist Maker", "Rotating Motor", "Sensors"],
    achievement: "🏆 State-level Award Winner",
    icon: Egg,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Complaint Portal",
    category: "Web Development",
    description:
      "Centralized complaint tracking and resolution system. Features user-friendly interface for submitting and tracking complaints efficiently.",
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
    achievement: null,
    icon: MessageSquare,
    color: "from-red-500 to-rose-500",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in AI/ML, IoT, and web development.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="fade-up" delay={index * 100}>
              <Card className="glass border-border/50 hover-lift group overflow-hidden h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}
                    >
                      <project.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/80">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mt-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {project.achievement && (
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm font-medium text-primary">
                        {project.achievement}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
