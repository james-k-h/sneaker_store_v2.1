/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'registry/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        tan: '#f5ece3',
        lightBlack: '#a9a9a9',
        inputBlack: '#222222',
        dark: '#1b1b1b',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        accentDark: '#FFA500',
        gray: '#747474',
        lightGray: '#d3d3d3',
        light: '#a9a9a9',
        white: '#fff',
        lightOrange: '#f5bf42',
        teal: '#03f4fc',
        silver: '#C0C0C0',
        smoke: '#848884',
        steelGrey: '#71797E',
        lime: '#32CD32',
        lightGreen: '#DAF7A6',
        almond: '#EFDECD',
        lightPink: '#FFB6C1',
        lightTan: '#FCF4D0',
        // color_1: '#740938',
        // color_2: '#AF1740',
        // color_3: '#CC2B52',
        // color_4: '#DE7C7D',

        // beiges
        color_1: '#999999',
        color_2: '#777777',
        color_3: '#555555',
        color_4: '#333333',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        altoption: {
          DEFAULT: 'hsl(var(--lightTan))',
          foreground: 'hsl(var(--lightTan-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      placeholderColor: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        altoption: '#FCF4D0',
      },
      animation: {
        roll: 'roll 24s linear infinite',
      },
      screens: {
        sxl: '1180px',
        xs: '480px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
