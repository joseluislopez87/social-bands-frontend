import { configure, addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(themeDecorator);

configure(loadStories, module);