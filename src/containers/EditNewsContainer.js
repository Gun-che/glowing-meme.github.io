import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createGetNewsItemRequest, createDeleteNewsRequest } from '../actions/news'
import ErrorPage from '../components/ErrorPage'
import { LoadingFullScreen } from '../components/LoadingComponent/LoadingComponent'
import NewsEdit from '../components/NewsEdit'

export const EditNewsContainer = ({
  handlerRequest,
  data,
  msg,
  isFetching,
  token,
  userData,
}) => {

  let { newsId } = useParams();

  useEffect(() => {
    handlerRequest(newsId)
  }, [handlerRequest, newsId])

  const tmp = () => {
    if (data.length === 1) {
      return <NewsEdit
        data={data[0]}
        token={token}
        userData={userData}
      />

    } else if (msg) {
      return <ErrorPage err={msg} />

    } else if (isFetching) {
      return <LoadingFullScreen />
    }
  }

  return (
    <div>
      {tmp()}
    </div>
  )
}

EditNewsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  handlerRequest: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  data: state.news.newsData,
  msg: state.news.msg,
  isFetching: state.news.isFetching,
  token: state.user.token,
  userData: state.user.userData,
})

const mapDispatchToProps = dispatch => ({
  handlerRequest: (newsId) => dispatch(createGetNewsItemRequest(newsId)),
  deleteRequest: (newsId) => dispatch(createDeleteNewsRequest(newsId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditNewsContainer)

