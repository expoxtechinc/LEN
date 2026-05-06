import { ArrowRight, Cloud, Code, Lock, Users, Zap, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * SAS TECH INC - Cinematic Mobile App
 * Design: Premium Tech Cinema
 * - Dark cinematic background (#0F1117)
 * - Cyan (#00D9FF) and Gold (#FFD700) accents
 * - Glass-morphism effects with backdrop blur
 * - Smooth animations and transitions
 * - Playfair Display for headlines, Inter for body
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <a href="#about" className="text-sm font-medium hover:text-primary transition-all duration-300">About</a>
            <button className="btn-premium">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image with Parallax */}
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
              SAS TECH INC crafts stunning, high-performance static websites that drive sales and engage your audience with premium design and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-premium flex items-center justify-center gap-2 group">
                Explore Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                Schedule a Call
              </button>
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

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-card/50">
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

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-widest">About Us</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
                Liberia's Premier <span className="gradient-text">Tech Studio</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Based in Liberia, SAS TECH INC is a cutting-edge web development studio specializing in creating static websites that deliver results. We combine cinematic design with technical excellence to help businesses thrive in the digital landscape.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Our mission is to empower businesses with stunning web solutions that drive growth, engagement, and sales.
              </p>
              <button className="btn-premium flex items-center gap-2 group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="glass p-8 rounded-xl">
                <div className="space-y-6">
                  {["Innovation", "Quality", "Performance", "Support"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-black" />
                      </div>
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            <button className="px-6 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold mb-4">SAS TECH INC</h3>
              <p className="text-muted-foreground text-sm">Premium web solutions from Liberia to the world.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-all duration-300">Web Design</a></li>
                <li><a href="#" className="hover:text-primary transition-all duration-300">Development</a></li>
                <li><a href="#" className="hover:text-primary transition-all duration-300">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-all duration-300">About</a></li>
                <li><a href="#" className="hover:text-primary transition-all duration-300">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-all duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-all duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-all duration-300">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-all duration-300">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 SAS TECH INC. All rights reserved. Based in Liberia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
