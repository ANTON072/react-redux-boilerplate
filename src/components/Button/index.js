import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Button({ children, ...rest }) {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>
}

export default Button

const ButtonStyle = styled.button`
  background-color: ${props => props.theme.color.gold};
  padding: 0 10px;
  line-height: 30px;
  &:active {
    background-color: ${props => props.theme.color.orange};
  }
  &:disabled {
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.grey2};
    cursor: default;
  }
`

Button.propTypes = {
  children: PropTypes.node
}
