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
  },

  // App
  appBackground: '#f5f5f5',

  // Header
  headerBackground: utils.gradient,

  // NavBar
  navBarBackground: 'white',
}

export default theme;