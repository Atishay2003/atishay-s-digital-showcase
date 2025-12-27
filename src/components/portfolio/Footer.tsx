import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold gradient-text">
              Atishay Jayfale
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Python Developer | Data Science Enthusiast | AI/ML Engineer
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>by Atishay</span>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="border-border/50 hover:bg-primary/10"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Atishay Jayfale. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
