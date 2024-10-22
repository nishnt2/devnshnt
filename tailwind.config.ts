import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pt_sans: ['var(--font-pt-sans)', 'sans-serif'],
      },
      fontSize: {
        xxl: 'var(--xxl-font-size)',
        xl: 'var(--xl-font-size)',
        lg: 'var(--lg-font-size)',
        lm: 'var(--lm-font-size)',
        md: 'var(--md-font-size)',
        ms: 'var(--ms-font-size)',
        sm: 'var(--sm-font-size)',
        xs: 'var(--xs-font-size)',
        base: 'var(--base-font-size)',
      },
    },
  },
  plugins: [],
};
export default config;
