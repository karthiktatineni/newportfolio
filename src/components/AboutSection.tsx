import { Zap } from 'lucide-react';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const leftContent = [
  "I'm Karthik Tatineni, an Electronics and Communication Engineering student at IARE, Hyderabad, with a strong interest in IoT, VLSI, AI technologies, automation, and embedded systems. I enjoy building small, functional projects using Arduino and ESP boards.",
  "Beyond academics, I enjoy gaming, which helps sharpen my reflexes and decision-making skills. I often spend time developing and tinkering with mini-projects using Arduino, ESP8266/32, and sensors—transforming creative ideas into functional prototypes."
];

const rightContent = [
  "My strengths include problem-solving, hands-on experimentation, and a solid grasp of both hardware and software integration. I've developed projects like a smart anti-theft bag, home automation system, and an environmental monitoring platform.",
  "I aim to build a future where I can contribute to impactful tech solutions that improve everyday life. My goal is to become a well-rounded embedded systems developer who bridges the gap between hardware and intelligent software."
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <h3 className={`section-title flex items-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Zap className="w-8 h-8 text-primary flex-shrink-0" />
          About Me
        </h3>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col justify-start space-y-6">
            {leftContent.map((paragraph, index) => (
              <p
                key={index}
                className={`text-muted-foreground leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-start space-y-6">
            {rightContent.map((paragraph, index) => (
              <p
                key={index}
                className={`text-muted-foreground leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
