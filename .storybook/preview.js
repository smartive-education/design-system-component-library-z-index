import 'tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'grey', value: '#F1F5F9' },
      { name: 'light', value: '#FFFFFF' },
      { name: 'dark', value: '#0F172A' },
      { name: 'violet', value: '#7C3AED' },
    ],
  },
};
