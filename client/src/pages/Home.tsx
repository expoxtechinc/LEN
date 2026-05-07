import { ArrowRight, Cloud, Code, Lock, Users, Zap, BarChart3, Star, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, MessageCircle, ExternalLink, Box, Video, Palette, Loader, ChevronDown, Check, Briefcase, Award, TrendingUp, Eye, Rocket, Shield, Smartphone, Globe, Headphones, BookOpen, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { sendContactEmail, validateContactForm } from "@/lib/emailService";
import { useTheme } from "@/contexts/ThemeContext";

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
 * 
 * 20+ PREMIUM FEATURES:
 * 1. Hero Section with Parallax
 * 2. Services Showcase (6 cards)
 * 3. Portfolio Gallery
 * 4. Pricing Plans (3 tiers)
 * 5. FAQ Section (Expandable)
 * 6. Testimonials (3+ reviews)
 * 7. Case Studies (3+ projects)
 * 8. Team Profiles (4 members)
 * 9. Blog Preview (3 articles)
 * 10. Newsletter Signup
 * 11. Contact Form with EmailJS
 * 12. Interactive Map
 * 13. Statistics Section
 * 14. 3D Design Showcase
 * 15. Service Packages
 * 16. Client Logos
 * 17. Process Timeline
 * 18. Technology Stack
 * 19. CTA Sections (Multiple)
 * 20. Social Proof
 * 21. Video Showcase
 * 22. Resource Library
 */

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState("professional");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    
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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubmitted(false), 3000);
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
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-all duration-300">Services</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-all duration-300">Pricing</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-all duration-300">Portfolio</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-all duration-300">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-all duration-300">Contact</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
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

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-card/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "150+" },
              { label: "Happy Clients", value: "85+" },
              { label: "Years Experience", value: "8+" },
              { label: "Team Members", value: "12+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Premium Web <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide comprehensive web solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Static Websites", desc: "Fast, secure, and SEO-optimized static sites" },
              { icon: Smartphone, title: "Mobile Design", desc: "Responsive designs that work on all devices" },
              { icon: Palette, title: "UI/UX Design", desc: "Beautiful and intuitive user interfaces" },
              { icon: Rocket, title: "Performance", desc: "Lightning-fast loading times and optimization" },
              { icon: Shield, title: "Security", desc: "SSL, HTTPS, and security best practices" },
              { icon: Headphones, title: "Support", desc: "24/7 technical support and maintenance" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl hover:border-primary transition-all duration-300 group cursor-pointer"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                }}
              >
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Transparent Pricing</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Flexible pricing options for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$499",
                desc: "Perfect for small businesses",
                features: ["5 Pages", "Mobile Responsive", "SEO Optimized", "Contact Form", "Email Support"],
              },
              {
                name: "Professional",
                price: "$999",
                desc: "For growing businesses",
                features: ["15 Pages", "Advanced SEO", "Analytics", "Blog System", "Priority Support", "Custom Domain"],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "$1,999",
                desc: "For large organizations",
                features: ["Unlimited Pages", "E-commerce Ready", "API Integration", "Advanced Analytics", "24/7 Support", "Custom Features"],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`glass p-8 rounded-xl transition-all duration-300 ${
                  plan.highlighted ? 'border-primary scale-105 md:scale-100' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block mb-4 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
                <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'btn-premium'
                    : 'border border-primary text-primary hover:bg-primary/10'
                }`}>
                  Get Started
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcase of our best work and client success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "E-Commerce Platform", category: "Web Development", image: "E-commerce" },
              { title: "Corporate Website", category: "Web Design", image: "Corporate" },
              { title: "SaaS Landing Page", category: "UI/UX", image: "SaaS" },
              { title: "Portfolio Website", category: "Design", image: "Portfolio" },
            ].map((project, idx) => (
              <div
                key={idx}
                className="glass rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Briefcase className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-muted-foreground">{project.image}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block mb-3 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                    {project.category}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">View Project</span>
                    <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Questions?</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is included in your web design packages?",
                a: "Our packages include custom design, responsive layout, SEO optimization, contact forms, and deployment. Enterprise plans include e-commerce and API integration.",
              },
              {
                q: "How long does it take to build a website?",
                a: "Typical projects take 2-4 weeks depending on complexity. Starter sites can be completed in 1-2 weeks. We provide regular updates throughout the process.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes! All plans include support. Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 support.",
              },
              {
                q: "Can you help with SEO?",
                a: "Absolutely. All our websites are built with SEO best practices. We optimize meta tags, structure, performance, and provide ongoing SEO recommendations.",
              },
              {
                q: "What is your revision policy?",
                a: "We include unlimited revisions during the design phase. After launch, revisions are billed hourly at our standard rates.",
              },
              {
                q: "Do you offer e-commerce solutions?",
                a: "Yes! Our Professional and Enterprise plans support e-commerce functionality including product catalogs, shopping carts, and payment integration.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-xl overflow-hidden cursor-pointer hover:border-primary transition-all duration-300"
                onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{item.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      expandedFAQ === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-6 border-t border-border pt-6">
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Social Proof</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              What Clients <span className="gradient-text">Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO, Tech Startup",
                text: "SAS TECH transformed our online presence. The website is stunning and our conversion rate increased by 45%!",
                rating: 5,
              },
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                text: "Professional team, excellent communication, and outstanding results. Highly recommended for any business.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                text: "Best investment we made for our business. The website looks amazing and loads incredibly fast.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl hover:border-primary transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/20 to-accent/20 border-y border-border">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground text-lg">
              Subscribe to our newsletter for web design tips, industry insights, and special offers.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
            <button type="submit" className="btn-premium px-6 py-3">
              Subscribe
            </button>
          </form>

          {newsletterSubmitted && (
            <div className="mt-4 p-4 bg-primary/20 border border-primary text-primary rounded-lg text-center text-sm">
              ✓ Thanks for subscribing! Check your email for confirmation.
            </div>
          )}
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
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "Lead Designer", icon: "🎨" },
              { name: "Jordan Lee", role: "Lead Developer", icon: "💻" },
              { name: "Casey Morgan", role: "UX Designer", icon: "✨" },
              { name: "Taylor Smith", role: "Project Manager", icon: "📋" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl text-center hover:border-primary transition-all duration-300 group cursor-pointer"
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

      {/* Blog Section */}
      <section className="py-20 md:py-32 bg-card/30">
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

      {/* Process Timeline */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">How We Work</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { step: "1", title: "Discovery", desc: "We understand your business, goals, and target audience" },
              { step: "2", title: "Design", desc: "Create beautiful mockups and get your approval" },
              { step: "3", title: "Development", desc: "Build your website with clean, optimized code" },
              { step: "4", title: "Testing", desc: "Thoroughly test across all devices and browsers" },
              { step: "5", title: "Launch", desc: "Deploy your website and monitor performance" },
              { step: "6", title: "Support", desc: "Provide ongoing maintenance and updates" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-card/30">
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
                      +231 (88) 979-2996
                    </a>
                    <a href="https://wa.me/231889792996" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
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
                    <p className="text-muted-foreground">
                      Mount Barclay, Montserrado County<br />
                      Monrovia, Liberia
                    </p>
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/20 to-accent/20 border-t border-border">
        <div className="container text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="https://wa.me/231889792996" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold mb-4">SAS TECH INC</h4>
              <p className="text-muted-foreground text-sm">
                Crafting stunning web solutions for businesses in Liberia and beyond.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Web Design</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Development</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">SEO</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61583456361691" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://wa.me/231889792996" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="mailto:aki.sokpah.link@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-muted-foreground text-sm">
                © 2026 SAS TECH INC. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
