import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withHandlers } from 'recompose'
import PropTypes from 'prop-types'

import { actions } from '../redux/modules/pages/home'
import Button from '../components/Button'
import Counter from '../containers/Counter'
import PhotoImg from '../assets/img/dummy.jpg'

function Home({ handleChange, handleSubmit, page }) {
  const { input, loading } = page
  return (
    <div>
      <h1>Home</h1>
      <div>
        <img src={PhotoImg} alt="" width={100} />
      </div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder="なまえ"
            value={input.name}
            onChange={handleChange('name')}
          />
        </p>
        <p>
          <input
            type="mail"
            placeholder="メールアドレス"
            value={input.email}
            onChange={handleChange('email')}
          />
        </p>
        <p>
          <Button type="submit" disabled={loading}>
            ログイン
          </Button>
        </p>
      </form>
      <div>
        <Counter />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  page: state.pages.home
})

const mapDispatchToProps = dispatch => ({
  pageActions: bindActionCreators({ ...actions }, dispatch)
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    handleChange: props => key => e => {
      const { pageActions } = props
      pageActions.input({ key, value: e.target.value })
    },
    handleSubmit: props => e => {
      e.preventDefault()
      props.pageActions.submit()
    }
  })
)(Home)

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  page: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    input: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    })
  })
}
