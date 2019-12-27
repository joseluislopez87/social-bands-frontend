const globals = {
  // Theme gradient:
  gradientStart: '#ff512f',
  gradientEnd: '#dd2476',
}

const utils = {
  gradient: `linear-gradient(
    ${globals.gradientStart},
    ${globals.gradientEnd}
  )`,
  gradientRotated: `linear-gradient(
    90deg,
    ${globals.gradientStart},
    ${globals.gradientEnd}
  )`,
}

const theme = {
  colors: {
    primary: globals.gradientStart,
    secondary: globals.gradientEnd,
    inactive: '#656464',
    gradient: utils.gradient,
    gradientRotated: utils.gradientRotated,
  },

  instruments: {
    'guitar-acoustic': '0 0',
    'guitar-electric': '-100px 0',
    'guitar-bass': '-200px 0',
    'keyboard': '-300px 0',
    'drums': '-400px 0',
  },

  styles: {
    'blues': 'linear-gradient(.15turn, #6a11cb, #2575fc)',
    'rock': 'linear-gradient(.4turn, #ff0844, #ffb199)',
  },

  shadows: {
    light: '0px 3px 6px #6d6d6d21',
    normal: '0px 3px 6px #6d6d6d75',
  },

  lightShadow: '2px 2px 6px #02020224',

  // App
  appBackground: '#f5f5f5',

  // Header
  headerBackground: utils.gradient,

  // NavBar
  navBarBackground: 'white',
}

export default theme;