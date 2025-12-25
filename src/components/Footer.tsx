import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" fill="currentColor" />
          </p>
          <p className="text-muted-foreground text-sm">
            Karthik Tatineni
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
