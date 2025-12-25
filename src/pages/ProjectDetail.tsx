import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Button variant="hero" asChild>
            <Link to="/">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              {project.title}
            </h1>

{/* 🔴 VIDEO / IMAGE GALLERY */}
{project.videos && project.videos.length > 0 ? (
  <div className="mb-8 animate-fade-in-up flex flex-wrap justify-center gap-6">
    {project.videos.map((video, index) => (
      <div
        key={index}
        className="bg-card rounded-xl border border-border overflow-hidden w-full sm:w-96 md:w-80 lg:w-96"
      >
        {video.includes('youtube') ? (
          <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
            <iframe
              src={video}
              title={`${project.title} Video ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            src={video}
            controls
            className="w-full h-auto max-h-[280px] object-contain"
          />
        )}
      </div>
    ))}
  </div>
) : project.image ? (
  <div className="bg-card rounded-xl border border-border overflow-hidden mb-8 mx-auto max-w-4xl">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-auto max-h-[280px] object-contain"
    />
  </div>
) : null}




           {/* Project Description */}
{/* Project Description */}
<div className="mb-20 animate-fade-in-up"> {/* more bottom spacing */}
  <div className="bg-card p-10 rounded-2xl shadow-lg max-w-5xl mx-auto">
    {project.fullDescription.map((paragraph, index) => (
      <p
        key={index}
        className="text-muted-foreground text-lg leading-relaxed mb-6"
        style={{ animationDelay: `${(index + 2) * 0.1}s` }}
      >
        {paragraph}
      </p>
    ))}
  </div>
</div>




            {/* Features */}
            {project.features && (
              <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary text-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
              <Button variant="heroOutline" asChild>
                <Link to="/#projects">
                  <ArrowLeft className="w-5 h-5" />
                  All Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
