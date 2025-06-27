// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: '#360F5A',     // Dark Purple
        accent: '#005404',      // Dark Green

        // UI Backgrounds
        background: {
          light: '#F5F5F7',
          card: '#FFFFFF',
        },

        // Text
        text: {
          main: '#1A1A1A',
          muted: '#555555',
        },

        // Borders, Dividers
        border: {
          subtle: '#DDE0E4',
        },

        // Special Use (Quiz, Highlights)
        fun: '#F4C430', // Golden yellow
      },
    },
  },
  plugins: [],
};
