import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button } from '../components/Button'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => (
    <Fragment>
      <div>
        <Button onClick={action('clicked')}>Default</Button>
        <Button primary onClick={action('clicked')}>Primary</Button>
        <Button color='blue' primary onClick={action('clicked')}>Blue</Button>
        <Button color='red' primary onClick={action('clicked')}>Red</Button>
        <Button color='black' primary onClick={action('clicked')}>Black</Button>
        <Button color='gray' primary onClick={action('clicked')}>Gray</Button>
      </div>
      <div>
        <Button onClick={action('clicked')}>Default</Button>
        <Button onClick={action('clicked')}>Primary</Button>
        <Button color='blue' onClick={action('clicked')}>Blue</Button>
        <Button color='red' onClick={action('clicked')}>Red</Button>
        <Button color='black' onClick={action('clicked')}>Black</Button>
        <Button color='gray' onClick={action('clicked')}>Gray</Button>
      </div>
    </Fragment>
  )
);
