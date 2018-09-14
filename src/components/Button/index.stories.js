import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './index'

storiesOf('Button', module)
  .add('デフォルト', () => <Button onClick={action('clicked')}>ボタン</Button>)
  .add('非活性', () => (
    <Button onClick={action('clicked')} disabled={true}>
      ボタン
    </Button>
  ))
