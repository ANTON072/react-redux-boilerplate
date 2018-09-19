import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withHandlers, withState } from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { actions, withValue } from '../../redux/modules/shared/counter'
import Button from '../../components/Button'

export function Counter({
  value,
  text,
  handleClick,
  setMyCounter,
  myCounter,
  incrementMyCounter
}) {
  return (
    <Root>
      <h2>Counter</h2>
      <p>
        value:
        {text}
      </p>
      <p>
        <Button onClick={handleClick('increment', 5)}>Increment</Button>
        <Button onClick={handleClick('decrement', 2)}>Decrement</Button>
      </p>
      <button onClick={incrementMyCounter}>my counter</button>
      <p>{myCounter}</p>
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
  withValue,
  withState('myCounter', 'setMyCounter', 0),
  withHandlers({
    handleClick: ({ actions }) => (key, num) => () => {
      actions.count(num, key)
    },
    incrementMyCounter: ({ setMyCounter }) => () => setMyCounter(n => n + 1)
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
