import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Using the same config as index.ts to prevent PrismaClientInitializationError
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Start seeding...');

  // 1. Coaches
  const coaches = [
    {
      name: "Mr. Ravinder Kumar",
      role: "Founder & Head Coach",
      image: "founder-ravinder-kumar", // we'll use string to identify it in frontend if needed
      specialization: "Speed Skating, Competition Training",
      experience: "8+ Years",
      description: "Certified skating instructor with experience training state-level athletes.",
      achievements: ["State Level Certified Coach", "500+ Students Trained", "Multiple Award Winner"],
    },
    {
      name: "Coach Arun Yadav",
      role: "Senior Coach",
      image: null,
      specialization: "Artistic Skating, Beginners",
      experience: "5+ Years",
      description: "Specializes in teaching young children and artistic skating techniques.",
      achievements: ["Certified Instructor", "Artistic Skating Expert", "Child Training Specialist"],
    },
    {
      name: "Coach Sunita Mishra",
      role: "Assistant Coach",
      image: null,
      specialization: "Freestyle, Safety Training",
      experience: "3+ Years",
      description: "Focus on freestyle techniques and ensuring safe skating practices.",
      achievements: ["Safety Certified", "Freestyle Expert", "Youth Development Focus"],
    },
  ];

  for (const coach of coaches) {
    await prisma.coach.create({
      data: coach,
    });
  }
  console.log('Seeded Coaches');

  // 2. Events
  const upcomingEvents = [
    {
      title: "Summer Skating Camp 2025",
      date: "June 1 - June 15, 2025",
      time: "5:30 AM - 9:00 AM",
      location: "The Ayodhya Skates Academy",
      type: "Camp",
      description: "Intensive 15-day training camp for all skill levels. Special focus on competition preparation.",
      status: "Registrations Open",
      isPastEvent: false,
    },
    {
      title: "District Level Championship",
      date: "March 15, 2025",
      time: "8:00 AM onwards",
      location: "District Sports Complex",
      type: "Competition",
      description: "Annual district championship in speed skating and artistic categories.",
      status: "Coming Soon",
      isPastEvent: false,
    },
    {
      title: "Annual Day Celebration",
      date: "April 20, 2025",
      time: "4:00 PM - 8:00 PM",
      location: "The Ayodhya Skates Academy",
      type: "Event",
      description: "Showcase performances, prize distribution, and celebration of achievements.",
      status: "Save the Date",
      isPastEvent: false,
    },
  ];

  const pastEvents = [
    {
      title: "State Level Roller Skating Championship 2024",
      date: "December 2024",
      result: "3 Gold, 2 Silver, 5 Bronze Medals",
      isPastEvent: true,
    },
    {
      title: "NTPC Tanda Skating Workshop",
      date: "June 2023",
      result: "100+ Participants Trained",
      isPastEvent: true,
    },
    {
      title: "District Championship 2023",
      date: "October 2023",
      result: "Best Academy Award",
      isPastEvent: true,
    },
  ];

  for (const event of [...upcomingEvents, ...pastEvents]) {
    await prisma.event.create({
      data: event,
    });
  }
  console.log('Seeded Events');

  // 3. Achievements
  const achievements = [
    {
      year: "2024",
      title: "State Level Championship",
      category: "Speed Skating",
      result: "Gold Medal",
      student: "Ankit Kumar",
      iconName: "Trophy",
      color: "text-yellow-500",
    },
    {
      year: "2024",
      title: "District Level Competition",
      category: "Artistic Skating",
      result: "Silver Medal",
      student: "Priya Singh",
      iconName: "Medal",
      color: "text-gray-400",
    },
    {
      year: "2023",
      title: "State Level Championship",
      category: "Speed Skating",
      result: "Bronze Medal",
      student: "Rahul Verma",
      iconName: "Medal",
      color: "text-amber-600",
    },
    {
      year: "2023",
      title: "Regional Competition",
      category: "Freestyle",
      result: "Gold Medal",
      student: "Team The Ayodhya Skates",
      iconName: "Trophy",
      color: "text-yellow-500",
    },
    {
      year: "2022",
      title: "District Championship",
      category: "Inline Skating",
      result: "1st Place",
      student: "Multiple Students",
      iconName: "Award",
      color: "text-primary",
    },
    {
      year: "2022",
      title: "Youth Skating Festival",
      category: "All Categories",
      result: "Best Academy Award",
      student: "The Ayodhya Skates",
      iconName: "Star",
      color: "text-yellow-500",
    },
  ];

  for (const ach of achievements) {
    await prisma.achievement.create({
      data: ach,
    });
  }
  console.log('Seeded Achievements');

  // 4. Partners
  const schoolLogoBase = '/src/assets/school%20logo';
  const partnersModel = (prisma as any).partners;
  const partnersData = [
    { name: 'Aryavart Academy', image: `${schoolLogoBase}/logo.jpg` },
    { name: 'Bhavdiya Public School, Ayodhya', image: `${schoolLogoBase}/images.jpeg` },
    { name: 'Faizabad Public School, Ayodhya', image: `${schoolLogoBase}/logo_fps_new.png` },
    { name: 'Seth Anandram Jaipuria School, Majnai, Ayodhya', image: `${schoolLogoBase}/SAJS-Ayodhya-Website.jpg` },
    { name: 'H.C.J. Academy, Ayodhya', image: `${schoolLogoBase}/logo-1.webp` },
    { name: 'Jingle Bell School, Ayodhya', image: `${schoolLogoBase}/JBS-1.jpg` },
    { name: 'Jingle Bell Academy', image: `${schoolLogoBase}/jba-logo.jfif` },
    { name: 'Seth M.R.Jaipuria School, Ayodhya', image: `${schoolLogoBase}/MRD%20LOGO.webp` },
  ];

  for (const partner of partnersData) {
    const existing = await partnersModel.findFirst({
      where: { name: partner.name }
    });

    if (!existing) {
      await partnersModel.create({
        data: partner
      });
    }
  }
  console.log('Seeded Partners');

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
