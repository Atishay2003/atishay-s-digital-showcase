import { Code, Brain, Cpu, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

const highlights = [
  {
    icon: Code,
    title: "Python Developer",
    description: "Strong foundation in Python with hands-on experience in building real-world applications.",
  },
  {
    icon: Brain,
    title: "AI/ML Enthusiast",
    description: "Expertise in Machine Learning, Deep Learning, and NLP with TensorFlow and OpenCV.",
  },
  {
    icon: Cpu,
    title: "IoT Innovator",
    description: "Experience building IoT solutions with ESP32 for automation and smart systems.",
  },
  {
    icon: Award,
    title: "Award Winner",
    description: "Multiple state and national level awards for innovative technical projects.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <h3 className="text-2xl font-semibold mb-6">
              Passionate about building <span className="gradient-text">intelligent solutions</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a B.Sc. Computer Science graduate from MGM's College of CS & IT, Nanded, 
                with a strong foundation in Python, AI/ML, IoT, and Data Science. My journey 
                in technology has been marked by hands-on experience with real-world projects 
                that solve meaningful problems.
              </p>
              <p>
                With multiple award-winning innovations at state and national levels, I've 
                demonstrated my ability to transform ideas into impactful solutions. From 
                building an AI-powered yoga pose correction system to developing smart 
                automation systems, I bring creativity and technical expertise to every project.
              </p>
              <p>
                I'm particularly interested in financial analytics, predictive modeling, 
                and leveraging AI to create intelligent systems. My goal is to continue 
                pushing the boundaries of what's possible with technology while contributing 
                to innovative solutions that make a difference.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">7.38</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">2025</div>
                <div className="text-sm text-muted-foreground">Graduating</div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-left" delay={index * 100}>
                <Card className="glass border-border/50 hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
