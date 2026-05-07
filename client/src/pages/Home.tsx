import { ArrowRight, Cloud, Code, Lock, Users, Zap, BarChart3, Star, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, MessageCircle, ExternalLink, Box, Video, Palette, Loader } from "lucide-react";
import { useState, useEffect } from "react";
import { sendContactEmail, validateContactForm } from "@/lib/emailService";

/**
 * SAS TECH INC - Cinematic Mobile App
 * Design: Premium Tech Cinema
 * - Dark cinematic background (#0F1117)
 * - Cyan (#00D9FF) and Gold (#FFD700) accents
 * - Glass-morphism effects with backdrop blur
 * - Smooth animations and transitions
 * - Playfair Display for headlines, Inter for body
 * 
 * Contact: aki.sokpah.link@gmail.com | +231889792996
 * Location: Mount Barclay, Montserrado County, Liberia
 * Facebook: https://www.facebook.com/profile.php?id=61583456361691
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    
    // Simulate map loading
    setTimeout(() => setMapLoaded(true), 500);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setIsLoading(true);

    try {
      const validation = validateContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (!validation.isValid) {
        const errorMessages = Object.values(validation.errors).join(", ");
        setFormError(errorMessages);
        setIsLoading(false);
        return;
      }

      const response = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (response.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        setFormError(response.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError("An error occurred. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code className="w-6 h-6 text-black" />
            </div>
            <span className="font-display font-bold text-xl">SAS TECH</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-all duration-300">Services</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-all duration-300">Portfolio</a>
            <a href="#designs" className="text-sm font-medium hover:text-primary transition-all duration-300">3D Designs</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-all duration-300">Testimonials</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-all duration-300">Contact</a>
            <a href="https://wa.me/231889792996" target="_blank" rel="noopener noreferrer" className="btn-premium">WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663634034714/QCWDj4GvrWofyqztnMLP2K/hero-dark-tech-V8w5ZdjcuaBXw6CVhKdU3w.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="container relative z-20">
          <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Welcome to the future</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Cinematic Web <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              SAS TECH INC crafts stunning, high-performance static websites that drive sales and engage your audience with premium design and cutting-edge technology. Based in Monrovia, Liberia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-premium flex items-center justify-center gap-2 group">
                Explore Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://wa.me/231889792996" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Expertise</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Services That <span className="gradient-text">Transform</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to deployment, we deliver premium web solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Code, title: "Web Design", desc: "Stunning, responsive designs that captivate and convert", color: "from-primary" },
              { icon: Zap, title: "Performance", desc: "Lightning-fast loading times and optimal user experience", color: "from-accent" },
              { icon: Lock, title: "Security", desc: "Enterprise-grade security for your digital assets", color: "from-primary" },
              { icon: Cloud, title: "Cloud Solutions", desc: "Scalable infrastructure for growing businesses", color: "from-accent" },
              { icon: BarChart3, title: "Analytics", desc: "Data-driven insights to optimize your presence", color: "from-primary" },
              { icon: Users, title: "Support", desc: "24/7 expert support and maintenance services", color: "from-accent" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="glass group hover:border-primary transition-all duration-300 p-8 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                }}
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} to-accent/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-20 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Recent Work</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
              Portfolio <span className="gradient-text">Showcase</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663634034714/QCWDj4GvrWofyqztnMLP2K/services-showcase-hyhzUdpLXKRCqMFb8Wpgfo.webp", title: "E-Commerce Platform", desc: "High-converting sales website" },
              { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663634034714/QCWDj4GvrWofyqztnMLP2K/web-design-hero-PESFajVk89VpR8tMsPtBD9.webp", title: "Corporate Website", desc: "Premium brand presence" },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                style={{
                  animationDelay: `${idx * 150}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Design Showcase Section */}
      <section id="designs" className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Creative Showcase</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              3D Design & <span className="gradient-text">Video Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We create immersive 3D designs, cinematic videos, and interactive experiences that bring your brand to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[              { icon: Box, title: "3D Product Design", desc: "Stunning 3D models and product visualizations for your brand", color: "from-primary" },
              { icon: Video, title: "Cinematic Videos", desc: "Professional video production and motion graphics", color: "from-accent" },
              { icon: Palette, title: "Interactive Design", desc: "Engaging interactive web experiences and animations", color: "from-primary" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl hover:border-primary transition-all duration-300 group cursor-pointer"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} to-accent/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all">
                  View Gallery
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-xl">
              <h3 className="font-display font-bold text-2xl mb-4">3D Animation & Modeling</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Product 3D visualization and rendering</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Architectural visualization and walkthroughs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Character animation and rigging</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Motion graphics and visual effects</span>
                </li>
              </ul>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="font-display font-bold text-2xl mb-4">Video Production</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Corporate video production</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Product demo and explainer videos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Commercial and promotional content</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Social media video content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Success Stories</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from businesses that transformed with our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO, TechStart Inc", text: "SAS TECH transformed our online presence. The results exceeded expectations!", rating: 5 },
              { name: "Michael Chen", role: "Marketing Director", text: "Professional, creative, and results-driven. Highly recommended for any business.", rating: 5 },
              { name: "Emma Williams", role: "Founder, Digital Agency", text: "Outstanding quality and attention to detail. Our clients love the new website!", rating: 5 },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl hover:border-primary transition-all duration-300"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "120+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Team</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Talented professionals dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Alex Rivera", role: "Creative Director", icon: "🎨" },
              { name: "Jordan Lee", role: "Lead Developer", icon: "💻" },
              { name: "Casey Morgan", role: "UX Designer", icon: "✨" },
              { name: "Taylor Smith", role: "Project Manager", icon: "📋" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl text-center hover:border-primary transition-all duration-300 group cursor-pointer"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{member.icon}</div>
                <h3 className="font-display font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <div className="flex gap-3 justify-center">
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Insights</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with industry trends and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Design Trends 2026", date: "May 6, 2026", category: "Design", excerpt: "Discover the latest trends shaping modern web design and user experiences." },
              { title: "Performance Optimization Guide", date: "May 4, 2026", category: "Performance", excerpt: "Learn how to optimize your website for lightning-fast loading times." },
              { title: "Mobile-First Strategy", date: "May 1, 2026", category: "Strategy", excerpt: "Why mobile-first design is essential for modern web applications." },
            ].map((article, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl hover:border-primary transition-all duration-300 group cursor-pointer"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                }}
              >
                <div className="inline-block mb-4 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                  {article.category}
                </div>
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Get in Touch</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
                Let's Work <span className="gradient-text">Together</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Ready to transform your digital presence? Contact us today for a free consultation and let's create something amazing.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:aki.sokpah.link@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      aki.sokpah.link@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone & WhatsApp</h4>
                    <a href="tel:+231889792996" className="text-muted-foreground hover:text-primary transition-colors block">
                      +231 889 792 996
                    </a>
                    <a href="https://wa.me/231889792996" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mt-1">
                      <MessageCircle className="w-4 h-4" />
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Mount Barclay, Montserrado County</p>
                    <p className="text-muted-foreground">Monrovia, Liberia</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Follow Us</h4>
                    <a href="https://www.facebook.com/profile.php?id=61583456361691" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <Facebook className="w-4 h-4" />
                      SAS TECH INC
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="+231 XXX XXX XXX"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                    disabled={isLoading}
                    required
                  />
                </div>
                <button type="submit" className="btn-premium w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {formSubmitted && (
                  <div className="p-4 bg-primary/20 border border-primary text-primary rounded-lg text-sm animate-in fade-in">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {formError && (
                  <div className="p-4 bg-destructive/20 border border-destructive text-destructive rounded-lg text-sm animate-in fade-in">
                    ✕ {formError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Visit Us in <span className="gradient-text">Liberia</span>
            </h2>
            <p className="text-muted-foreground text-lg">Mount Barclay, Montserrado County, Monrovia</p>
          </div>

          <div className="relative w-full h-96 rounded-xl overflow-hidden glass border border-border">
            {mapLoaded && (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3854155556!2d-10.807300!3d6.315500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf5c8d8d8d8d8d8d9%3A0x1234567890!2sMount%20Barclay%2C%20Monrovia%2C%20Liberia!5e0!3m2!1sen!2sus!4v1234567890"
              />
            )}
            {!mapLoaded && (
              <div className="w-full h-full flex items-center justify-center bg-card">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-muted-foreground">Loading map...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663634034714/QCWDj4GvrWofyqztnMLP2K/hero-dark-tech-V8w5ZdjcuaBXw6CVhKdU3w.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container relative z-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Ready to Transform Your <span className="gradient-text">Digital Presence?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium">Start Your Project</button>
            <a href="https://wa.me/231889792996" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold mb-4">SAS TECH INC</h3>
              <p className="text-muted-foreground text-sm">Premium web solutions from Liberia to the world. Based in Monrovia.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-all duration-300">Web Design</a></li>
                <li><a href="#designs" className="hover:text-primary transition-all duration-300">3D Design</a></li>
                <li><a href="#" className="hover:text-primary transition-all duration-300">Video Production</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-all duration-300">About</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-all duration-300">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-primary transition-all duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://www.facebook.com/profile.php?id=61583456361691" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 flex items-center gap-2">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a></li>
                <li><a href="https://wa.me/231889792996" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a></li>
                <li><a href="mailto:aki.sokpah.link@gmail.com" className="hover:text-primary transition-all duration-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 SAS TECH INC. All rights reserved. Mount Barclay, Montserrado County, Liberia.</p>
            <p className="mt-2">Phone: +231 889 792 996 | Email: aki.sokpah.link@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
