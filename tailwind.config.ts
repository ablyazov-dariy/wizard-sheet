import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
