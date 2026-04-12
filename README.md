# The Ayodhya Skates 🛼

A full-stack monorepo application representing the official web platform for **The Ayodhya Skates Academy**. This project consists of a dynamic React frontend and a fully integrated robust Express + Node server hooked into a Neon PostgreSQL database.

## Project Structure

This repository is structured as a monorepo containing both the client application and the API backend:

- **`/frontend`**: The React + Vite client-side application.
- **`/backend`**: The Node.js + Express server and Prisma database schemas.

## Tech Stack

### Frontend
- **Framework**: React 18 
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Radix UI / shadcn/ui base

### Backend
- **Server**: Node.js & Express
- **Database**: PostgreSQL (Neon Serverless)
- **ORM**: Prisma Client v7 (via `@prisma/adapter-pg`)
- **Email Delivery**: Nodemailer

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18+)
- [npm](https://www.npmjs.com/) 

### 1. Installation

Install the orchestrator dependencies in the root:
```bash
npm install
```

Install frontend dependencies:
```bash
cd frontend
npm install
```

Install backend dependencies:
```bash
cd ../backend
npm install
```

### 2. Environment Variables

Navigate to the `backend/` directory and create a `.env` file containing the following variables:

```env
DATABASE_URL="postgresql://<user>:<password>@<host>/neondb?sslmode=require"

# Required for the automated Admissions Email logic
EMAIL_USER="your-academy-email@gmail.com"
EMAIL_PASS="your-gmail-16-digit-app-password"
```

### 3. Database Setup

Ensure your Neon database schema is synchronized, and push the initial seed data:

```bash
cd backend
npx prisma db push
npx prisma db seed
npx prisma studio
```
*The seeder script will populate the database with the initial roster of coaches, past & future events, and academy achievements.*

### 4. Running the Application Locally

Rather than spinning up the frontend and backend sequentially, return to the project's **root directory** and run the master development script:

```bash
npm run dev
```

This uses `concurrently` to launch:
- The **Vite Server** on Port `8080`
- The **Express API** on Port `5000`

Go to `http://localhost:8080` to view the academy! To explore the database tables visually, you can open a secondary terminal inside `/backend` and run `npx prisma studio`.
