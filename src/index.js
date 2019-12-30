import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import flattenMessages from './utils/flattenMessages';

import messages from 'messages';

let locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

const Unison = () => (
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <Router>
      <App></App>
    </Router>
  </IntlProvider>
)

ReactDOM.render(<Unison />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
