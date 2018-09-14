import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { configure, addDecorator } from '@storybook/react'

import theme from '../src/misc/theme'
import baseStyles from '../src/misc/baseStyles'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(loadStories, module)

// グローバルのCSS設定
injectGlobal`
  ${styledNormalize}
  ${baseStyles}
`
