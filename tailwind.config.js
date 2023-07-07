
import defaultTheme from 'tailwindcss/defaultTheme';
import colors, { white as _white, black as _black, trueGray, red as _red, amber, green as _green, blue as _blue, indigo as _indigo, purple as _purple } from 'tailwindcss/colors';

export const theme = {
  colors: {
    ...colors,
    dark: '#2a221c',
    primary: '#d71920',
    primaryVariant: '#ac1319',
  },
  screens: {
    'xs': '375px',
    ...defaultTheme.screens,
  },
  darkMode: false,
  theme: {
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui', ...],
      // 'serif': ['ui-serif', 'Georgia', ...],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      // 'body': ['Open Sans', ...],
      'league-gothic': 'League Gothic',
      'league-gothic-regular': 'League Gothic-Regular',
      'league-gothic-condensed-regular': 'League Gothic-Condensed Regular',
      'league-gothic-italic': 'League Gothic-Italic',
      'league-gothic-condensed-italic': 'League Gothic-Condensed Italic',
      'rockwell': 'Rockwell',
      'rockwell-bold': 'RockwellBold',
      'helvetica': 'Helvetica'
    }
  },
};