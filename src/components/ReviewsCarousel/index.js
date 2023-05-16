// Write your code here
import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {userDetails: reviewsList[0], count: 0}

  onLeftArrow = () => {
    const {userDetails, count} = this.state
    const updatedCount = count - 1

    if (count > 0) {
      this.setState({count: updatedCount})
      this.setState({userDetails: reviewsList[updatedCount]})
    } else {
      this.setState({userDetails: reviewsList[0]})
    }
  }

  onRightArrow = () => {
    const {userDetails, count} = this.state
    const totalLength = reviewsList.length
    const updatedCount = count + 1

    console.log(count + 1)
    if (count < totalLength - 1) {
      this.setState({count: updatedCount})
      this.setState({userDetails: reviewsList[updatedCount]})
    } else {
      this.setState({userDetails: reviewsList[totalLength - 1]})
    }
  }

  filterUserDetails = () => {
    const {userDetails, count} = this.state
    const filterData = reviewsList.filter(
      each => each.username === userDetails.username,
    )
    return filterData
  }

  render() {
    const totalLength = reviewsList.length
    console.log(totalLength)
    const {userDetails, count} = this.state
    const filterData = this.filterUserDetails(userDetails)
    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <ul>
          {filterData.map(each => (
            <li className="user-review">
              <div className="img-container">
                <img
                  className="user-img"
                  src={each.imgUrl}
                  alt={each.username}
                />
              </div>
              <div className="arrow-container">
                <button
                  onClick={this.onLeftArrow}
                  className="button"
                  data-testid="leftArrow"
                  type="button"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                    alt="left arrow"
                  />
                </button>
                <p className="user-name">{each.username}</p>
                <button
                  onClick={this.onRightArrow}
                  className="button"
                  data-testid="rightArrow"
                  type="button"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                    alt="right arrow"
                  />
                </button>
              </div>
              <p className="description">{each.companyName}</p>

              <p className="description">{each.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ReviewsCarousel
