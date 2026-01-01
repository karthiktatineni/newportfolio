import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground animate-fade-in-up">
              Hello<span className="text-primary">.</span>
            </h2>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in-up flex items-center" style={{ animationDelay: '0.1s' }}>
              <span className="w-12 h-1 bg-primary mr-4" />
              I'm Tatineni Karthik Sai
            </h3>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              VLSI, Embedded & IoT Enthusiast
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              A passionate ECE engineer with a knack for VLSI, Embedded Systems, automation, and intelligent systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
<Button variant="heroOutline" size="lg" asChild>
  <a href="/videos/Karthik_resume.pdf" download>
    <Download className="w-5 h-5" />
    My Resume
  </a>
</Button>

              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View My Work
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                <img
                  src={profilePhoto}
                  alt="Karthik Tatineni"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;