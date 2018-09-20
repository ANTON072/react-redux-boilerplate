import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

function Canvas() {
  return <Root id="canvas-root" />
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Canvas)

const Root = styled.div``
