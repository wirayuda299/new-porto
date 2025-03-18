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
      screens: {
        sm1: "517px",
        md2: "850px",
      },
      maxWidth: {
        400: "400px",
        1400: "1400px",
        700: "700px",
      },
      maxHeight: {
        750: "750px",
      },
      fontSize: {
        16: "64px",
        10: "10px",
      },
      colors: {
        "white-500": "#475569",
        "white-800": "#F3F8FF",
        "primary-dark": "#1160f9",
        "light-gray": "#ffffff33",
        "black-300": "#192333",
        "black-200": "#151E2C",
        "white-100": "#ececec",
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
          DEFAULT: "#FFBE62",
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
      minWidth: {
        200: "200px",
        250: "250px",
      },

      animation: {
        "fade-in": "fade-in 500ms ease-in forwards",
        "fade-up": "fade-up 400ms ease forwards ",
        "fade-left": "fade-left 500ms ease forwards",
        "fade-right": "fade-right 500ms ease forwards",
        increasing: "increasing 500ms forwards",
        "icon-up": "icon-up 0.5s linear",
        move: "move 5s linear infinite",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        "fade-up": {
          from: {
            opacity: 0,
            transform: "translateY(50px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "fade-right": {
          from: {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "fade-left": {
          from: {
            opacity: 0,
            transform: "translateX(50px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        increasing: {
          from: { width: 0 },
          to: { width: "100%" },
        },
        "icon-up": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
