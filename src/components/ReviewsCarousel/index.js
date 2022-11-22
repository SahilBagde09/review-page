// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    userIdNumber: 0,
  }

  onClickLeftButton = () => {
    this.setState(prevState => {
      if (prevState.userIdNumber === 0) {
        return {userIdNumber: 0}
      }
      return {userIdNumber: prevState.userIdNumber - 1}
    })
  }

  onClickRightButton = reviewsList => {
    this.setState(prevState => {
      if (prevState.userIdNumber === reviewsList.length - 1) {
        return {userIdNumber: reviewsList.length - 1}
      }
      return {userIdNumber: prevState.userIdNumber + 1}
    })
  }

  render() {
    const {userIdNumber} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      userIdNumber
    ]
    return (
      <div className="bg-container">
        <div className="review-container">
          <h1 className="heading-element">Reviews</h1>
          <img src={imgUrl} alt={username} className="user-image" />
          <div className="buttons-control-container">
            <button
              testid="leftArrow"
              type="button"
              onClick={this.onClickLeftButton}
              className="button-element"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="button-img"
                alt="left arrow"
              />
            </button>
            <p className="user-name">{username}</p>
            <button
              testid="rightArrow"
              type="button"
              className="button-element"
              onClick={() => {
                this.onClickRightButton(reviewsList)
              }}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="button-img"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="companyName">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
