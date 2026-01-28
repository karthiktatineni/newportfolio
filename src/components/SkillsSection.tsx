import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Coding & Engineering Skills',
    icon: Code,
    skills: ['C','C++','Python','TypeScript','VHDL','HTML','CSS','React','Vite','Node.js','Next.js','API Integration(RESTAPI)','SQL','PostgreSQL','RDBMS','RTOS (FreeRTOS)','Firmware Debugging','Microcontroller Integration','PCB Design','Sensor Calibration',],
  },
  {
    title: 'Tech Domains',
    icon: Cpu,
    skills: ['IoT', 'Embedded Systems', 'VLSI', 'Automation', 'AI Applications', 'CAD', 'Analog Electronics','Web development','Database Management'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['ESP', 'Arduino IDE', 'Firebase','Cloudflare','UltimakerCura', 'NI Multisim', 'Proteus', 'Cadence', 'Blender', 'Blynk', 'I2C / SPI / UART', 'Git & GitHub', 'Vercel', 'Postman', 'Fusion 360','Docker (basic)','Flutter (basic)'],
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <h3 className={`section-title justify-center ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
          Skills
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`bg-card p-6 rounded-xl border border-border ${
                isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-bold text-foreground">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full hover:bg-primary/20 hover:text-foreground transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
