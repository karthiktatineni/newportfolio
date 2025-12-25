import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              {project.title}
            </h1>

{project.githubUrl && (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mb-8 px-6 py-2
               rounded-xl bg-zinc-900 text-white
               hover:bg-zinc-800 transition
               animate-fade-in-up"
    style={{ animationDelay: '0.15s' }}
  >
    View Source Code on GitHub
  </a>
)}


            {/* Video Gallery */}
            {project.videos && project.videos.length > 0 && (
              <div className="mb-8 flex flex-wrap justify-center gap-6 animate-fade-in-up">
                {project.videos.map((video, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border overflow-hidden
                               w-full sm:w-96 md:w-80 lg:w-96 h-[280px]"
                  >
                    {video.includes('youtube') ? (
                      <iframe
                        src={video}
                        title={`${project.title} Video ${index + 1}`}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={video}
                        controls
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mb-8 flex flex-wrap justify-center gap-6 animate-fade-in-up">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border overflow-hidden
                               w-full sm:w-96 md:w-80 lg:w-96 h-[280px]
                               flex items-center justify-center cursor-pointer"
                    onClick={() => setLightboxImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Project Description */}
            <div className="mb-20 animate-fade-in-up">
              <div className="bg-card p-10 rounded-2xl shadow-lg">
                {project.fullDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground text-lg leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-10 animate-fade-in-up">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-border">
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

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
