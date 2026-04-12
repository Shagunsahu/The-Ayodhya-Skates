import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Coaches
app.get('/api/coaches', async (req, res) => {
  try {
    const coaches = await prisma.coach.findMany();
    res.json(coaches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch coaches" });
  }
});

app.post('/api/coaches', async (req, res) => {
  try {
    const newCoach = await prisma.coach.create({ data: req.body });
    res.status(201).json(newCoach);
  } catch (error) {
    res.status(500).json({ error: "Failed to create coach" });
  }
});

// Events
app.get('/api/events', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

app.post('/api/events', async (req, res) => {
  try {
    const newEvent = await prisma.event.create({ data: req.body });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Failed to create event" });
  }
});

// Achievements
app.get('/api/achievements', async (req, res) => {
  try {
    const achievements = await prisma.achievement.findMany({
      orderBy: { year: 'desc' }
    });
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch achievements" });
  }
});

app.post('/api/achievements', async (req, res) => {
  try {
    const newAchievement = await prisma.achievement.create({ data: req.body });
    res.status(201).json(newAchievement);
  } catch (error) {
    res.status(500).json({ error: "Failed to create achievement" });
  }
});

// Admissions
app.get('/api/admissions', async (req, res) => {
  try {
    const admissions = await prisma.admission.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch admissions" });
  }
});

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your preferred provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/admissions', async (req, res) => {
  try {
    const newAdmission = await prisma.admission.create({ data: req.body });

    // Send email notification dynamically via Nodemailer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending it to the academy admin
      subject: `New Admission Application: ${newAdmission.studentName}`,
      html: `
        <h2>New Admission Application Received</h2>
        <p><strong>Student Name:</strong> ${newAdmission.studentName}</p>
        <p><strong>Age:</strong> ${newAdmission.age}</p>
        <p><strong>Parent Name:</strong> ${newAdmission.parentName}</p>
        <p><strong>Phone:</strong> ${newAdmission.phone}</p>
        <p><strong>Email:</strong> ${newAdmission.email || 'N/A'}</p>
        <p><strong>Address:</strong> ${newAdmission.address}</p>
        <p><strong>Discipline:</strong> ${newAdmission.discipline}</p>
        <p><strong>Batch:</strong> ${newAdmission.batch}</p>
        <p><strong>Experience:</strong> ${newAdmission.experience}</p>
        <p><strong>Message:</strong> ${newAdmission.message || 'N/A'}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Nodemailer Error:", emailError);
      // Optional: You could throw here if you want to fail the whole request
    }

    res.status(201).json(newAdmission);
  } catch (error) {
    console.error("Admissions POST error:", error);
    res.status(500).json({ error: "Failed to create admission or send email" });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const newMessage = await prisma.contactMessage.create({ data: req.body });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending it to the academy admin
      subject: `New Contact Message: ${newMessage.subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${newMessage.name}</p>
        <p><strong>Email:</strong> ${newMessage.email}</p>
        <p><strong>Phone:</strong> ${newMessage.phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${newMessage.subject}</p>
        <p><strong>Message:</strong> ${newMessage.message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Contact Email sent successfully");
    } catch (emailError) {
      console.error("Nodemailer Error:", emailError);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Contact POST error:", error);
    res.status(500).json({ error: "Failed to create contact message" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
