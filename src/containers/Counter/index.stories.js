import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Counter } from './index'

storiesOf('Counter', module).add('デフォルト', () => (
  <Counter handleClick={() => action('clicked')} value={10} />
))
