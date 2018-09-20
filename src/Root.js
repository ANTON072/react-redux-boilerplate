import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, lifecycle } from 'recompose'

import Home from './pages/Home'
import baseStyles from './misc/baseStyles'
import theme from './misc/theme'
import webgl from './webgl'

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

const mapStateToProps = state => ({
  store: state
})

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators({ ...actions }, dispatch)
// })

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    null
  ),
  lifecycle({
    componentDidMount() {
      console.log('component did mount')
      const { store, actions } = this.props
      webgl.initialize(store, actions)
    }
  })
)(Root)

// グローバルのCSS設定
injectGlobal`
  ${styledNormalize}
  ${baseStyles}
`

Root.propTypes = {
  history: PropTypes.object.isRequired
}
