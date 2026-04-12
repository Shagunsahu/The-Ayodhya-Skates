import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent",
    quote: "My daughter has been training at The Ayodhya Skates for 2 years. She won her first medal at the state level last year. The coaching is excellent!",
    avatar: "👩",
  },
  {
    name: "Rahul Verma",
    role: "Student (Age 14)",
    quote: "I started as a complete beginner and now I compete in speed skating. The coaches are very supportive and patient.",
    avatar: "👦",
  },
  {
    name: "Dr. Amit Singh",
    role: "Parent",
    quote: "The safety measures and professional approach gave us confidence to enroll our kids. Both are now passionate skaters!",
    avatar: "👨",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeader
          badge="Testimonials"
          title="What Our Students Say"
          subtitle="Don't just take our word for it. Hear from our students and parents about their experience."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-sports p-6 lg:p-8"
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
