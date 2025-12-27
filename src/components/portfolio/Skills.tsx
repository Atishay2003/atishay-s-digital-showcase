import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, Database, Brain, Cpu, Bot, Sparkles,
  FileCode, Terminal, BarChart3, Eye
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    id: "aiml",
    label: "AI/ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "Natural Language Processing", level: 70 },
      { name: "OpenCV", level: 80 },
      { name: "MediaPipe", level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Tech",
    icon: Cpu,
    skills: [
      { name: "IoT (ESP32)", level: 85 },
      { name: "ChatGPT", level: 80 },
      { name: "Gemini", level: 75 },
      { name: "Predictive Modeling", level: 80 },
    ],
  },
  {
    id: "core",
    label: "Core Skills",
    icon: Terminal,
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Problem Solving", level: 90 },
      { name: "Data Analysis", level: 85 },
      { name: "Project Management", level: 75 },
    ],
  },
];

const skillIcons: Record<string, React.ElementType> = {
  "Python": FileCode,
  "JavaScript": Code,
  "Java": Coffee,
  "SQL": Database,
  "Machine Learning": Brain,
  "Deep Learning": Brain,
  "TensorFlow": BarChart3,
  "Natural Language Processing": Bot,
  "OpenCV": Eye,
  "MediaPipe": Eye,
  "IoT (ESP32)": Cpu,
  "ChatGPT": Bot,
  "Gemini": Sparkles,
  "Predictive Modeling": BarChart3,
  "Data Structures & Algorithms": Terminal,
  "Problem Solving": Sparkles,
  "Data Analysis": BarChart3,
  "Project Management": Terminal,
};

function Coffee(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const currentCategory = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive skill set spanning programming languages, AI/ML technologies, and modern tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id
                  ? "bg-primary hover:bg-primary/90"
                  : "border-border/50 hover:bg-primary/10"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {currentCategory?.skills.map((skill, index) => {
            const SkillIcon = skillIcons[skill.name] || Code;
            return (
              <Card
                key={skill.name}
                className="glass border-border/50 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <SkillIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* All Skills Summary */}
        <div className="mt-16 glass rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
