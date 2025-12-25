import { useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Linkedin, Github, Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-foreground' },
  { name: 'Phone', icon: Phone, href: 'tel:+1234567890', color: 'hover:text-green-500' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'karthik@example.com' },
  { icon: Phone, label: 'Phone', value: '+91 1234567890' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India' },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24"
    >
      <div className="container mx-auto px-6">
        <h3 className={`section-title justify-center ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
          Get In Touch
        </h3>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <div
            className={`space-y-8 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}
          >
            <p className="text-muted-foreground text-lg">
              Feel free to reach out for collaborations, project discussions, or just a friendly chat about technology!
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '200ms' }}
          >
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-secondary border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-secondary border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-secondary border-border focus:border-primary resize-none"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
