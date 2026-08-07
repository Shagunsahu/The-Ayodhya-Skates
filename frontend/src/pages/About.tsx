import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import founderImage from "@/assets/founder-ravinder-kumar.jpeg";
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

const coreObjectives = [
  "Professional Roller Skating Training",
  "School Sports Development Programs",
  "Athlete Development & Performance Excellence",
  "District, State & National Championship Participation",
  "Organization of Roller Skating Events & Competitions",
  "Talent Identification and Nurturing",
  "Promotion of Fitness and Healthy Lifestyle",
  "Leadership, Discipline and Character Building Through Sports",
  "Grassroots Development of Roller Sports",
  "Creating Future Champions for India",
];

const About = () => {
  return (
    <Layout>
      <SEO title="About Us" description="Learn about The Ayodhya Skates, founded by Ravinder Kumar — founder, head coach, sports administrator, and national speed inline skater." path="/about" />
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
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Our Story
                </span>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
                  🎖️ Affiliated with District Roller Skating Association, Ayodhya
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Ayodhya Skates was founded by <strong className="text-foreground">Ravinder Kumar</strong>, a passionate sports professional, roller skating coach, and sports administrator dedicated to the promotion of roller sports in Uttar Pradesh.
                </p>
                <p>
                  As the <strong className="text-foreground">Founder & Head Coach</strong> of The Ayodhya Skates, he has created a platform that offers professional roller skating training to young athletes and beginners while nurturing talent for district, state, and national competitions.
                </p>
                <p>
                  He currently serves as the <strong className="text-foreground">Joint Secretary of the Uttar Pradesh Roller Sports Association (UPRSA)</strong> and <strong className="text-foreground">District Secretary of the District Roller Skating Association, Ayodhya</strong>, actively working to strengthen infrastructure, coaching standards, and grassroots sports programs.
                </p>
                <p>
                  A <strong className="text-foreground">national speed inline skating player</strong> himself, Ravinder Kumar believes that sports should build confidence, leadership, discipline, teamwork, and a healthy lifestyle among students.
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
                  alt="The Ayodhya Skates Company"
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

      {/* Founder Section 
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
                  <p className="text-primary font-medium mb-4">Founder & Head Coach</p>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Ravinder Kumar is a passionate sports professional, roller skating coach, and sports administrator dedicated to the development and promotion of roller sports in Uttar Pradesh. Through The Ayodhya Skates, he has built a strong platform for professional training, school sports development, and athlete growth.
                    </p>
                    <p>
                      He has successfully introduced roller skating programs in multiple schools across Ayodhya and nearby districts, helping students discover their sporting potential while promoting physical fitness, sports culture, and long-term talent development.
                    </p>
                    <p>
                      His areas of expertise include professional roller skating coaching, school sports development, athlete training, speed inline skating, sports event management, championship organization, and youth leadership through sports.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
          */}
      {/* Documentary Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            badge="Documentary"
            title="Wheels of Passion"
            subtitle="The complete story of The Ayodhya Skates — our journey, mission, and vision"
          />

          <div className="space-y-6">
            {/* Vision/Mission/Values Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-primary/20 bg-[#1f2937] text-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  At The Ayodhya Skates, our mission is to promote roller skating as a platform for fitness, discipline, confidence, leadership, and excellence among children and youth. We are committed to providing professional coaching, structured training programs, and competitive opportunities that enable athletes to achieve success at District, State, National, and International levels.
                </p>
                <p className="mt-3 text-gray-200 text-sm leading-relaxed">
                  Through our School Roller Skating Programs, we partner with educational institutions to introduce quality sports education, talent identification, and athlete development pathways. Our objective is to make roller skating an integral part of student growth while encouraging a healthy and active lifestyle.
                </p>
              </div>

                <div className="rounded-2xl border border-accent/20 bg-[#1f2937] text-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-400/20 rounded-lg flex items-center justify-center">
                      <Eye className="w-5 h-5 text-amber-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Our Vision</h3>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Our vision is to establish Ayodhya as a leading hub for roller sports excellence in India and to create a strong sporting culture where every child has access to quality coaching and opportunities to excel.
                  </p>
                  <p className="mt-3 text-gray-200 text-sm leading-relaxed">
                    We envision a future where schools actively embrace roller skating as a developmental sport, talented athletes receive the guidance and support they need, and local players proudly represent their district, state, and country on national and international platforms.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-[#1f2937] text-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Our Core Objectives</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-200">
                  {coreObjectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-[#1f2937] text-white p-6 text-center shadow-sm">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-fuchsia-400/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-fuchsia-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Our Motto</h3>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 font-semibold text-lg tracking-wide">
                  “Building Champions, Inspiring Futures.”
                </p>
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6"
          >
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
