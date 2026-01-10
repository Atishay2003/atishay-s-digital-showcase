import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "@/assets/profile-pic.png";

const roles = [
  "Python Developer",
  "Data Science Enthusiast",
  "AI/ML Engineer",
  "IoT Innovator",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 shadow-2xl shadow-primary/20">
              <img
                src={profilePic}
                alt="Atishay Jayfale"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <p className="text-primary font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Atishay <span className="gradient-text">Jayfale</span>
          </h1>

          <div className="h-12 mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Building intelligent solutions with Python, AI/ML, and IoT.
            Award-winning innovator with a passion for solving real-world problems.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-16 mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "5+", label: "Projects" },
              { value: "5+", label: "Awards" },
              { value: "15+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="hover:bg-primary/10" asChild>
              <a href="/Atishay_Jayfale_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
              <a href="https://linkedin.com/in/atishay-jayfale/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
              <a href="https://github.com/atishayjayfale" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};
