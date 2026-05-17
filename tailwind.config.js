/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        washi: '#F7F1E5',
        paper: '#FBF8F1',
        sumi: '#1F1B18',
        'ink-muted': '#5F5750',
        gold: '#C9A646',
        indigo: '#243B53',
        vermilion: '#B14A36',
      },
      fontFamily: {
        'serif': [
          'Hiragino Mincho ProN',
          'Yu Mincho',
          'Noto Serif JP',
          'Noto Serif',
          'serif',
        ],
        'sans': [
          'Hiragino Sans',
          'Noto Sans JP',
          'system-ui',
          'sans-serif',
        ],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '13': '13px',
        '21': '21px',
        '34': '34px',
        '55': '55px',
        '89': '89px',
      },
    },
  },
  plugins: [],
}
