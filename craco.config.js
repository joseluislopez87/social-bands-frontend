module.exports = {
  babel: {
    "plugins": [
      [
        "babel-plugin-styled-components",
        {
          "ssr": false,
          "displayName": true
        }
      ]
    ]
  }
}