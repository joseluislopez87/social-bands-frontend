import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import flattenMessages from './utils/flattenMessages';
import { Grommet } from 'grommet';
import grommetTheme from './themes/grommet';

import locales from 'locales';

let locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

// Checks that the selected locale exists
// returns `en-US` as default locale if not.
const checkLocale = locale => {
  if (locales[locale]) return flattenMessages(locales[locale]);
  return flattenMessages(locales['en-US']);
}

const Unison = () => (
  <Grommet theme={grommetTheme}>
    <IntlProvider locale={locale} messages={checkLocale(locale)}>
      <Router>
        <App></App>
      </Router>
    </IntlProvider>
  </Grommet>
)

ReactDOM.render(<Unison />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
