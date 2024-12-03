<div align="center">
  <br />
    <a href="https://youtu.be/lEflo_sc82g?feature=shared" target="_blank">
      <img src="https://github.com/Hi-Dear-486/-SignUp-SignIn-with-firebase/blob/zeeshanBranch/demo.png" alt="Project Banner">
    </a>
  <br />

  <div>
   <img
  src="https://img.shields.io/badge/Next.js-0070F3?style=for-the-badge&logo=next.js&logoColor=white"
  alt="Next.js"
/>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Firebase-orange?style=for-the-badge&logo=firebase&logoColor=black&color=FFCA28" alt="firebase" />
    <img src="https://img.shields.io/badge/-React_Hook_Form-black?style=for-the-badge&logoColor=white&logo=react&color=EC5990" alt="reacthookform" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
   <img src="https://img.shields.io/badge/-Zod-blue?style=for-the-badge&logo=zod&logoColor=white&color=2B90D9" alt="Zod" />

  </div>

  <h3 align="center">SignIn & SignUp Authentication</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Firebase provides authentication services for easy sign-in and sign-up. Using Firebase Authentication, users can sign up with email/password, social media accounts, or phone numbers. It handles account creation, login, password recovery, and security, enabling developers to integrate authentication into apps with minimal setup and enhanced user experience.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **34k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- typescript
- firebase
- TailwindCSS
- Zod
- ReactHookForm

## <a name="features">🔋 Features</a>

👉 **Form Handling**: Uses react-hook-form for managing form state and validation.

👉 **Data Validation**: Validates user inputs with Zod schema..

👉 **Email/Password Authentication**: Sign up and login with email and password.

👉 **Real-time Feedback**: Displays success or error messages using toast notifications.

👉 **Form Reset**: Automatically clears form fields after successful submission.

👉 **Anonymous Authentication**: Allows temporary sign-ins without user details.

👉 **User Management**: Easily manage user profiles, email verification, and password resets.

👉 **Responsive Design**: Utilizes Tailwind CSS for a responsive and clean UI.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/) (Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Hi-Dear-486/SignUp-SignIn-with-firebase.git
cd ./
```

**Installation**

Install the project dependencies using yarn:

```bash
yarn install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:
```env
#Firebase
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```
Replace the placeholder values with your actual Firebase credentials. You can obtain these credentials by signing up on the [Firebase website (https://firebase.google.com/).

**Running the Project**

```bash
yarn  run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          200: "#0D0F10",
          300: "#131619",
          400: "#1A1D21",
          500: "#363A3D",
          600: "#76828D",
          700: "#ABB8C4",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

```
</details>

## <a name="more">🚀 More</a>
**Advance your skills with Next Js**

Enjoyed creating this project? Dive deeper  for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://github.com/Hi-Dear-486/Movie-flix-App" target="_blank">
<img src="https://github.com/Hi-Dear-486/Movie-flix-App/blob/master/movie.JPG" alt="Project Banner">
</a>

<br />
<br />

#
