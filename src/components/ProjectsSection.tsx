import { useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { projects, categories } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ id, title, description, index }: { id: string; title: string; description: string; index: number }) => {
  return (
    <Link
      to={`/project/${id}`}
      className="glow-card bg-card p-6 rounded-xl border border-border hover:border-primary/50 cursor-pointer block animate-fade-in-up group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        View Project <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24"
    >
      <div className="container mx-auto px-6">
        <h3 className={`section-title justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Projects
        </h3>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isVisible && filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.shortDescription}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
