import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const children = 'button';

export const actions = {
  handleClick: action('handleClick'),
}

storiesOf('Button', module)
  .add('Default', () => <Button>{children}</Button>)
  .add('Disabled', () => <Button disabled>{children}</Button>)
  .add('Secondary', () => <Button secondary>{children}</Button>);