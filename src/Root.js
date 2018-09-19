import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { hot } from 'react-hot-loader'

import baseStyles from './misc/baseStyles'
import theme from './misc/theme'
import Home from './pages/Home'

function Root({ history }) {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </ThemeProvider>
      </ConnectedRouter>
    </Fragment>
  )
}

export default hot(module)(Root)

// グローバルのCSS設定
injectGlobal`
  ${styledNormalize}
  ${baseStyles}
`

Root.propTypes = {
  history: PropTypes.object.isRequired
}
