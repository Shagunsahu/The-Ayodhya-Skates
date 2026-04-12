import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import founderImage from "@/assets/founder-ravinder-kumar.jpg";
import { Target, Eye, Heart, Award, FileText, Download, Users, GraduationCap, Dumbbell, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from coaching to competition preparation.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To make Ayodhya a hub for world-class roller skating talent in India.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for skating drives us to inspire the next generation of athletes.",
  },
  {
    icon: Award,
    title: "Achievement",
    description: "We celebrate every milestone, from first steps on skates to podium finishes.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO title="About Us" description="Learn about The Ayodhya Skates, founded by NIS certified coach Ravinder Kumar. Ayodhya's premier roller skating academy with 8+ years of excellence." path="/about" />
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About The Ayodhya Skates</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Ayodhya's premier roller skating academy, training champions since 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary/10 text-primary">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Ayodhya Skates was founded in 2015 by <strong className="text-foreground">Mr. Ravinder Kumar</strong>
                  with a simple yet powerful vision: to bring world-class roller skating training to Ayodhya.
                </p>
                <p>
                  What started as a small initiative with just a handful of students has now grown into 
                  the region's most trusted skating academy, having trained over 500 students and produced 
                  numerous district and state-level champions.
                </p>
                <p>
                  Our academy is located near NTPC Tanda, featuring a dedicated skating track, 
                  professional-grade equipment, and a team of certified coaches committed to 
                  nurturing talent at every level.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={founderImage}
                  alt="The Ayodhya Skates Academy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-accent/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            subtitle="Our core values guide everything we do at The Ayodhya Skates"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-sports p-6 text-center group hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Leadership"
              title="Meet Our Founder"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-sports p-8 lg:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 rounded-full overflow-hidden shrink-0 ring-4 ring-primary/20">
                  <img
                    src={founderImage}
                    alt="Mr. Ravinder Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">Mr. Ravinder Kumar</h3>
                  <p className="text-primary font-medium mb-4">Founder & CEO</p>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      A national-level skater, NIS certified coach, and M.P.Ed graduate with more than 
                      15 years of experience in roller skating. Mr. Ravinder Kumar has dedicated his life 
                      to promoting roller skating in Uttar Pradesh.
                    </p>
                    <p>
                      His vision of making skating accessible to all children in Ayodhya has 
                      transformed countless lives, instilling discipline, confidence, and a love 
                      for sports in his students.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentary Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            badge="Documentary"
            title="Wheels of Passion"
            subtitle="The complete story of The Ayodhya Skates — our journey, mission, and vision"
          />

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Documentary Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card-sports p-6 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To create skilled skaters and responsible individuals through professional coaching 
                  and structured training programs.
                </p>
              </div>

              <div className="card-sports p-6 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To nurture young talent, encourage sportsmanship, and develop national-level athletes 
                  through modern training methods and experienced coaches.
                </p>
              </div>

              <div className="card-sports p-6 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Coaching Team</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A team of certified and experienced coaches dedicated to excellence and athlete growth.
                </p>
              </div>
            </motion.div>

            {/* Services & Download */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card-sports p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: GraduationCap, label: "Personal Coaching" },
                    { icon: Users, label: "School Programs" },
                    { icon: Dumbbell, label: "Group Training" },
                    { icon: Trophy, label: "Championships" },
                  ].map((service) => (
                    <div key={service.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <service.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{service.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-sports p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground">Full Documentary PDF</h3>
                    <p className="text-muted-foreground text-sm">
                      Download our complete documentary — "Wheels of Passion: The Story of Ayodhya Skates" 
                      — for the full academy profile, achievements, and more.
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href="/documents/Ayodhya_Skates_Documentary.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download Documentary
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Embedded PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="card-sports p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Read the Documentary
                </h3>
                <Button variant="outline" size="sm" asChild>
                  <a href="/documents/Ayodhya_Skates_Documentary.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Open in New Tab
                  </a>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden border border-border bg-muted">
                <iframe
                  src="/documents/Ayodhya_Skates_Documentary.pdf"
                  className="w-full h-[600px] lg:h-[750px]"
                  title="The Ayodhya Skates Documentary - Wheels of Passion"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
