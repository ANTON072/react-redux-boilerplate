import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withHandlers } from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { actions } from '../../redux/modules/shared/counter'
import Button from '../../components/Button'

export function Counter({ value, handleClick }) {
  return (
    <Root>
      <h2>Counter</h2>
      <p>
        value:
        {value}
      </p>
      <p>
        <Button onClick={handleClick('increment', 5)}>Increment</Button>
        <Button onClick={handleClick('decrement', 2)}>Decrement</Button>
      </p>
    </Root>
  )
}

const mapStateToProps = state => ({
  value: state.shared.counter.value
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    handleClick: props => (key, num) => () => {
      props.actions.count(num, key)
    }
  })
)(Counter)

const Root = styled.div`
  background-color: ${props => props.theme.color.grey2};
  padding: 20px;
`

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}
